// পেজ লোড হলে কনসোলে একটি মেসেজ দেখাবে
console.log("ShamimCloud ডেমো সাইট সফলভাবে লোড হয়েছে!");

// বাটন এবং ডিসপ্লে এলিমেন্ট খুঁজে বের করা
const clickButton = document.getElementById('click-btn');
const countDisplay = document.getElementById('count-display');

// কাউন্টার শুরু হবে ০ থেকে
let count = 0;

// বাটনে ক্লিক করলে কী হবে তার ফাংশন
clickButton.addEventListener('click', function() {
    // ১. কাউন্টের মান ১ বাড়ানো
    count = count + 1;

    // ২. নতুন মানটি স্ক্রিনে দেখানো
    countDisplay.textContent = count;

    // ৩. কনসোলে টেস্ট মেসেজ
    console.log("বাটনে ক্লিক করা হয়েছে! বর্তমান কাউন্ট: " + count);

    // ছোট্ট একটি অ্যানিমেশন ইফেক্ট (অপশনাল)
    clickButton.style.transform = "scale(0.95)";
    setTimeout(() => {
        clickButton.style.transform = "scale(1)";
    }, 100);
});
