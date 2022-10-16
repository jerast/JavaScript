const user = {};

console.log(user.profile.email);
// error : Cannot read property 'email' of undefined

console.log(user?.profile?.email);
// undefined

(user?.profile?.email)
    ? console.log('email')
    : console.log('fail');
// fail