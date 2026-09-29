document.addEventListener('DOMContentLoaded', () => {
  // 1. ระบบเปิด-ปิดเมนูบนอุปกรณ์มือถือ (Mobile Menu)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // ปิดเมนูอัตโนมัติเมื่อกดเลือกลิงก์
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. ระบบพับ-ขยายคำถามที่พบบ่อย (FAQ Accordion)
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // ปิดกล่องข้อความอื่นที่เปิดอยู่
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.accordion-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      // สลับสถานะเปิด-ปิดของกล่องปัจจุบัน
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
});