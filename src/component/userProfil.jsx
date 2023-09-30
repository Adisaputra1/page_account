import React from 'react';
import Button from './Button/Index';
import ButtonAccount from './Button/button';
const UserProfileCard = () => {
  return (
    <div className="flex justify-center min-h-screen bg-cover bg-no-repeat bg-[url('./assets/coverlogin.jpg')]">
      <div className="w-full mx-80 my-10 bg-background1 px-5 py-4 shadow-md rounded-md opacity-90">
        <h1 className="text-9xl text-button flex justify-center">
          <ion-icon name="person-circle-outline"></ion-icon>
        </h1>
        <h2 className="font-medium text-xl text-button flex justify-center">
          user.name{' '}
          <span className="mt-1 ml-2 cursor-pointer">
            <ion-icon name="create-outline"></ion-icon>
          </span>
        </h2>
        <h3 className="font-medium text-sm text-button mb-8 flex justify-center">
          user.email@gmail.com{' '}
          <span className="mt-1 ml-2 cursor-pointer">
            <ion-icon name="create-outline"></ion-icon>
          </span>
        </h3>
        <h1 className="text-2xl font-semibold mb-2 text-button">Account</h1>
        <ButtonAccount variant="bg-button w-full flex justify-between items-center text-2xl">
          <span>
            {' '}
            <ion-icon name="cart-outline"></ion-icon> Cart{' '}
          </span>
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </ButtonAccount>
        <ButtonAccount variant="bg-button w-full flex justify-between items-center text-2xl">
          <span>
            <ion-icon name="cash-outline"></ion-icon> Payment
          </span>
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </ButtonAccount>
        <ButtonAccount variant="bg-button w-full flex justify-between items-center text-2xl mb-20">
          <span>
            <ion-icon name="footsteps-outline"></ion-icon> History
          </span>
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </ButtonAccount>

        <Button variant="bg-button">Logout</Button>
      </div>
    </div>
  );
};

export default UserProfileCard;
