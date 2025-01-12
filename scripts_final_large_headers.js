document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.info').forEach(info => {
        info.style.display = 'none';
        info.style.opacity = '0';
    });
    document.querySelectorAll('.image-title').forEach(title => {
        title.style.opacity = '1';
    });
});

function toggleInfo(container) {
    const info = container.querySelector('.info');
    const title = container.querySelector('.image-title');
    if (info.style.display === 'block') {
        info.style.opacity = '0';
        setTimeout(() => info.style.display = 'none', 300);
        title.style.opacity = '1';
    } else {
        info.style.display = 'block';
        setTimeout(() => info.style.opacity = '1', 10);
        title.style.opacity = '0';
    }
}

function openSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    const info = section.querySelector('.info');
    const title = section.querySelector('.image-title');
    if (info) {
        document.querySelectorAll('.info').forEach((i) => (i.style.display = 'none'));
        info.style.display = 'block';
        setTimeout(() => info.style.opacity = '1', 10); 

        document.querySelectorAll('.image-title').forEach((t) => (t.style.opacity = '1'));
        title.style.opacity = '0';

        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
