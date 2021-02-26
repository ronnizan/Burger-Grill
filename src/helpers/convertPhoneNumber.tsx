export default function convertPhoneNumber(phoneNumber:string){
  let convertPhoneNumber
if (phoneNumber.startsWith('052')) {
 convertPhoneNumber=  phoneNumber.replace('052', '+97252');
}
if (phoneNumber.startsWith('053')) {
 convertPhoneNumber=  phoneNumber.replace('053', '+97253');
}
if (phoneNumber.startsWith('054')) {
 convertPhoneNumber=  phoneNumber.replace('054', '+97254');
}
if (phoneNumber.startsWith('055')) {
 convertPhoneNumber=  phoneNumber.replace('055', '+97255');
}
if (phoneNumber.startsWith('056')) {
 convertPhoneNumber=  phoneNumber.replace('056', '+97256');
}
if (phoneNumber.startsWith('057')) {
 convertPhoneNumber=  phoneNumber.replace('057', '+97257');
}
if (phoneNumber.startsWith('058')) {
 convertPhoneNumber=  phoneNumber.replace('058', '+97258');
}

return convertPhoneNumber


}