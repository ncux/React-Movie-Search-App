import React from 'react';
import styles from './navbar.module.css';

export const Navbar = () => {

    return (
        <div className={ styles.table }>
            <table>
                <tbody>
                    <tr>
                        <td><img src="American_made.svg" width="100" alt="" /></td>
                        <td><h3>Movie Search</h3></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

