document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form validation
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    const newsletterForm = document.getElementById('newsletter-form');
    const successMessage = document.getElementById('success-message');
    const gdprCheckbox = document.getElementById('gdpr-checkbox');
    
    gdprCheckbox.addEventListener('click', function() {
        this.classList.toggle('checked');
    });
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            emailError.classList.remove('hidden');
            return;
        }
        
        if (!gdprCheckbox.classList.contains('checked')) {
            alert('Please accept the Privacy Policy to subscribe.');
            return;
        }
        
        emailError.classList.add('hidden');
        successMessage.classList.remove('hidden');
        emailInput.value = '';
        gdprCheckbox.classList.remove('checked');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Custom checkboxes
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });
    
    // Custom radio buttons
    const radios = document.querySelectorAll('.custom-radio');
    radios.forEach(radio => {
        radio.addEventListener('click', function() {
            // Uncheck all radios in the same group
            const name = this.id.split('-')[0];
            document.querySelectorAll(`.custom-radio[id^="${name}"]`).forEach(r => {
                r.classList.remove('checked');
            });
            // Check the clicked radio
            this.classList.add('checked');
        });
    });
    
    // Custom switches
    const switches = document.querySelectorAll('.custom-switch');
    switches.forEach(switchEl => {
        switchEl.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize waveform visualization
    const waveformContainer = document.getElementById('waveform');
    if (waveformContainer) {
        const waveformChart = echarts.init(waveformContainer);
        const option = {
            animation: false,
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            xAxis: {
                type: 'category',
                show: false,
                data: Array.from({length: 100}, (_, i) => i)
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [{
                data: Array.from({length: 100}, () => Math.random() * 0.8 + 0.2),
                type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    color: 'rgba(87, 181, 231, 1)',
                    width: 2
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(87, 181, 231, 0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(87, 181, 231, 0.1)'
                        }]
                    }
                }
            }, {
                data: Array.from({length: 100}, (_, i) => i < 35 ? Math.random() * 0.8 + 0.2 : 0),
                type: 'line',
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    color: 'rgba(141, 211, 199, 1)',
                    width: 2
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(141, 211, 199, 0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(141, 211, 199, 0.1)'
                        }]
                    }
                }
            }]
        };
        waveformChart.setOption(option);
        
        // Handle window resize
        window.addEventListener('resize', function() {
            waveformChart.resize();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Zine page navigation
    const currentPageEl = document.getElementById('current-page');
    const totalPagesEl = document.getElementById('total-pages');
    const nextButton = document.querySelector('.ri-arrow-right-s-line').parentElement;
    const prevButton = document.querySelector('.ri-arrow-left-s-line').parentElement;
    const thumbnails = document.querySelectorAll('.p-4.border-t.border-gray-200.overflow-x-auto .w-16.h-16');
    
    let currentPage = 1;
    const totalPages = parseInt(totalPagesEl.textContent);
    
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            currentPageEl.textContent = currentPage;
            updateActiveThumbnail();
        }
    });
    
    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            currentPageEl.textContent = currentPage;
            updateActiveThumbnail();
        }
    });
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentPage = index + 1;
            currentPageEl.textContent = currentPage;
            updateActiveThumbnail();
        });
    });
    
    function updateActiveThumbnail() {
        thumbnails.forEach((thumbnail, index) => {
            if (index + 1 === currentPage) {
                thumbnail.classList.add('border-primary');
                thumbnail.classList.remove('border-gray-200');
            } else {
                thumbnail.classList.remove('border-primary');
                thumbnail.classList.add('border-gray-200');
            }
        });
    }
});