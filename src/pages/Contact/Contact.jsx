import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='flex justify-evenly gap-5 p-2 items-center'>
                <div className="h-[50vh] w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.264101345476!2d90.41202049147861!3d23.831679814459793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1701277931572!5m2!1sen!2sbd"
                        width="100%"
                        height="500"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen="1"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>News Wave Head Office</h1>
                    <p>E-mail: support@newswave.net</p>
                    <p>Contact: +02 00112223 </p>
                    <p>Location: Khilkhet, Dhaka, Bangladesh </p>
                </div>
            </div>
        </>
    );
};

export default Contact;
