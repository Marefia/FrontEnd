const userName = document.getElementById('userNameInput');
const password = document.getElementById('passwordInput');
export const signInButton = document.getElementById('signInButton');
const errorDisplay = document.getElementById('errorDisplay');

export const SignInViews = {
    getUserName: () => userName.value,
    getPassword: () => password.value,
    onClick: ()=>{console.log('Testing the import statement')},
    onSignInButtonClicked: signInButton.onclick,
    setErrorDisplay: (error) => {
        errorDisplay.innerText = error
    }
};
