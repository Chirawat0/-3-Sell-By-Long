document.addEventListener('DOMContentLoaded', function () {
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    const qrPaymentForm = document.getElementById('qrPaymentForm');
    const defaultPaymentForm = document.getElementById('defaultPaymentForm');
  
    const cardPayment = document.getElementById('cardPayment');
    const qrPayment = document.getElementById('qrPayment');
  
    cardPayment.addEventListener('change', function () {
      if (cardPayment.checked) {
        cardPaymentForm.style.display = 'block';
        qrPaymentForm.style.display = 'none';
        defaultPaymentForm.style.display = 'none';
      }
    });
  
    qrPayment.addEventListener('change', function () {
      if (qrPayment.checked) {
        qrPaymentForm.style.display = 'block';
        cardPaymentForm.style.display = 'none';
        defaultPaymentForm.style.display = 'none';
      }
    });
});

  document.querySelector('#cardPaymentForm .btn-primary').addEventListener('click', function() {
    // ดึงข้อมูลจาก input ของหมายเลขบัตร
    const cardNumber = document.getElementById('tel-cardNumber').value;

    // ดึงข้อมูลจาก input ของอีเมล
    const email = document.getElementById('email-email').value;

    // ตรวจสอบว่าหมายเลขบัตรและอีเมลไม่ว่างเปล่า
    if (cardNumber.trim() !== '' && email.trim() !== '') {
        // ทำการชำระเงิน หรือกระทำอื่นๆ ตามที่คุณต้องการ
        alert('ทำการชำระเงินด้วยบัตรเรียบร้อยแล้ว!');
    } else {
        // แสดงข้อความเตือนถ้าข้อมูลไม่ครบ
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง!');
    }
});

document.querySelector('#qrPaymentForm .btn-primary').addEventListener('click', function() {
    // ดึงข้อมูลจาก input ของชื่อผู้ชำระเงิน
    const payerName = document.getElementById('tel-name').value;

    // ดึงข้อมูลจาก input ของอีเมล
    const email2 = document.getElementById('email-email2').value;

    // ตรวจสอบว่าชื่อผู้ชำระเงินและอีเมลไม่ว่างเปล่า
    if (payerName.trim() !== '' && email2.trim() !== '') {
    // ทำการชำระเงิน หรือกระทำอื่นๆ ตามที่คุณต้องการ
    alert('ทำการชำระเงินด้วย QR เรียบร้อยแล้ว!');
    } else {
    // แสดงข้อความเตือนถ้าข้อมูลไม่ครบ
    alert('กรุณากรอกข้อมูลให้ครบทุกช่อง!');
    }
});