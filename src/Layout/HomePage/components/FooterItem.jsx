import React from "react";

const yearRights = new Date().getFullYear();

const FooterItem = () => {
    return (
        <div>
            <p className='m-3'>© Все права защищены {yearRights}</p>
        </div>
    )
}

export default FooterItem