const express = require('express');
const router = express.Router();
const users = require('../model/user'); 
const bloodCompatibility = require('../model/bloodCompatibility');

function getRecipientsForDonor(donorBloodGroup) {
  const recipients = Object.entries(bloodCompatibility)
    .filter(([recipientGroup, donorGroups]) => donorGroups.includes(donorBloodGroup))
    .map(([recipientGroup]) => recipientGroup);
  console.log(`Donor ${donorBloodGroup} compatible recipients:`, recipients);
  return recipients;
}

router.get('/compatible/:id', (req, res) => {
  const { id } = req.params;
  const currentUser = users.find(u => String(u.id) === String(id));

  if (!currentUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  console.log("Current user:", currentUser);

  const currentType = currentUser.type.trim().toLowerCase();
  const currentBlood = currentUser.bloodgroup.trim();

  let compatibleGroups = [];
  let targetType = '';

  if (currentType === 'recipient') {
    compatibleGroups = bloodCompatibility[currentBlood] || [];
    targetType = 'donor';
  } else {
    compatibleGroups = getRecipientsForDonor(currentBlood);
    targetType = 'recipient';
  }

  console.log(`Compatible blood groups for ${currentType}:`, compatibleGroups);
  console.log(`Target user type:`, targetType);

  const compatibleUsers = users.filter(user =>
    user.type.trim().toLowerCase() === targetType &&
    compatibleGroups.includes(user.bloodgroup.trim())
  );

  console.log("Compatible users found:", compatibleUsers);

  res.json(compatibleUsers);
});

router.get('/users/bloodgroup/:bloodgroup', (req, res) => {
  const bloodGroup = req.params.bloodgroup;
  const excludeUserId = req.query.excludeUserId;

  const filteredUsers = users.filter(user => 
    user.bloodgroup === bloodGroup && user.id !== excludeUserId
  );

  res.json(filteredUsers);
});

module.exports = router;
