// script.js
document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.querySelector('.form-control2');
    const sendButton = document.querySelector('.btn-primary');
    const chatMessages = document.querySelector('.chat-messages');

    sendButton.addEventListener('click', function () {
        sendMessage();
    });

    messageInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage('You', messageText);
            messageInput.value = '';
            // ส่งข้อความไปยังเซิร์ฟเวอร์หรือทำการประมวลผลต่อไปตามที่คุณต้องการ
        }
    }

    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message-${sender === 'You' ? 'right' : 'left'} pb-4`;
        messageDiv.innerHTML = `
            <div>
                <img src="https://bootdey.com/img/Content/avatar/avatar${sender === 'You' ? '1' : '3'}.png" class="rounded-circle mr-1" alt="${sender}" width="40" height="40">
                <div class="text-muted small text-nowrap mt-2">${getTime()}</div>
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ${sender === 'You' ? 'mr-3' : 'ml-3'}">
                <div class="font-weight-bold mb-1">${sender}</div>
                ${text}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        
        // เลื่อน scrollbar ไปที่ด้านล่างของพื้นที่แสดงข้อความ
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    

    function getTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
});
