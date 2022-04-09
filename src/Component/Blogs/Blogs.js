import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className="Context-api">
                <h2>What is Context-API?</h2>
                <p>React সাধারন ভাবে কোন Component হতে পেরামিটার বা ভালু পেতে হলে props ব্যাবহার করি। props প্রত্যেক Component ভিতরে প্রবেশ করে। সহজে বলতে Parent Component  হতে সকল Child Component সেটি ভালু পায়। কিন্তু Context-API ব্যাবহার করলে Parent Component হতে শুধু নিদিষ্ট Child Component শুধু পেতে পারবে। বাকি Component সেটি কে পাবে না। 
                </p>
            </div>
            <div className="inline-block-area">
                <h2>What is INLINE, BLOCK and Inline-Block element?</h2>
                <p><span>INLINE: </span> inline element হল যে সকল Element তার জায়গায় পুর width নেয় না। নতুন করে line হয় না। সেসকল element হল Inline Element</p>
                <p><span>Block: </span> block element হল হল যে সকল Element তার জায়গায় পুর width নেয়। নতুন line হয় এবং তার লাইন এ অন্য element কে আসতে দেয় না। সেসকল element হল Block Element</p>
                <p><span>Inline-Block: </span>inline-block element হল হল যে সকল Element তার জায়গায় পুর width নেয় কিন্তু নতুন লাইন হয় না অন্য element পাশাপাশি বস্তে পারে। Block Element কিন্তু Inline মত আচরন করে। সেসকল element হল Inline-Block Element.</p>
            </div>
        </div>
    );
};

export default Blogs;