const ACTIVITY_BUTTON = "oajrlxb2 thwo4zme";
const DELETE_BUTTON = "d2edcug0 hzawbc8m";
const DELETE_BUTTON_2 = "s1i5eluu ni8dbmo4 stjgntxs k4urcfbm";

function findActivityLog() {
  const activity_btn = document.getElementsByClassName(ACTIVITY_BUTTON);
  count = 0
  total = activity_btn.length
  for (i = 0; i < 4; i++) {
      activityLog(activity_btn[i]).then(findDeleteButton).then(findDeleteButtonAgain);
      count++; 
  }
  // findDeleteButton()
  //   findDeleteButtonAgain()
  //   count++;
  tt = "TOTAL=" + total + " DELETED=" + count
  return tt
}

function activityLog(ab) {
  return new Promise((resolve) => {
    setTimeout(() => {
        ab.click();
        resolve();
    }, 2000);
  });  
}

function findDeleteButton() {
  setTimeout(() => {
    string = "Delete"
    const delete_btn = document.evaluate('//*[text()="' + string + '"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
    console.log("findDeleteButton ", delete_btn);
    // if (delete_btn.textContent == "Delete") {
    //   console.log(delete_btn);
    // }    
    // delete_btn.click();
  }, 2000);
  
}

function findDeleteButtonAgain() {
  setTimeout(() => {
    const delete_btn_2 = document.getElementsByClassName(DELETE_BUTTON_2);
    console.log("findDeleteButtonAgain ", delete_btn_2[0]);
    // delete_btn_2[0].click();
  }, 2000);
}

function deleteFacebookActivityLog() {
  console.log(findActivityLog());
}

 