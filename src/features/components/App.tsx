import * as classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { counter } from '@/helpers';
import bird from '@/assets/bird.jpg'
import Logo from '@/assets/logo.svg'

export const App = () => {
    const number = counter(5, 5)
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    {/*todo how does SVG work?*/}
                    <Logo width={100} height={100} />
                </div>
                <h1>Hello World!</h1>
                <Link to="about">About</Link>
                <br />
                <Link to="shop">Shop</Link>
                <div className={classes.imageContainer}>
                    <img src={bird} width={100} height={100} alt="bird"/>
                </div>
                <div>{number}</div>
                <Outlet />
                {/*todo what is this?*/}
            </div>

        </Suspense>
    );
}
