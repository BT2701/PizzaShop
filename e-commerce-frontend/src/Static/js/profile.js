// script.js
document.addEventListener('DOMContentLoaded', function () {
    const controlDown = document.querySelector('.control-down');
    const controlUp = document.querySelector('.control-up');
    const profileHeaderRightControl = document.querySelector('.profile-header-right-control');
  
    controlDown.addEventListener('click', function () {
      profileHeaderRightControl.style.display = 'flex';
      controlUp.style.display = 'flex';
      controlDown.style.display = 'none';
    });
  
    controlUp.addEventListener('click', function () {
      profileHeaderRightControl.style.display = 'none';
      controlUp.style.display = 'none';
      controlDown.style.display = 'flex';
    });
  });
  