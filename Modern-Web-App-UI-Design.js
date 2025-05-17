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

 // Blog posts data
        const blogPosts = [
            {
                id: 1,
                title: "10 Essential Tools for Remote Work Productivity",
                excerpt: "Discover the most effective tools and strategies to boost your productivity while working remotely. From time management to collaboration software...",
                date: "2025-05-14",
                image: "https://readdy.ai/api/search-image?query=modern%20workspace%20with%20laptop%2C%20coffee%2C%20notebook%2C%20minimalist%20design%2C%20bright%20natural%20lighting%2C%20potted%20plant%2C%20wooden%20desk%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=1&orientation=landscape",
                tags: [
                    { name: "Technology", color: "blue" },
                    { name: "Productivity", color: "purple" }
                ]
            },
            {
                id: 2,
                title: "The Science Behind Mindfulness Meditation",
                excerpt: "Explore the neurological benefits of regular mindfulness practice and how it can transform your stress response, focus, and overall wellbeing...",
                date: "2025-05-10",
                image: "https://readdy.ai/api/search-image?query=person%20meditating%20in%20peaceful%20garden%20setting%2C%20morning%20light%2C%20zen%20atmosphere%2C%20mindfulness%20practice%2C%20calm%20environment%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=2&orientation=landscape",
                tags: [
                    { name: "Wellness", color: "green" },
                    { name: "Mental Health", color: "yellow" }
                ]
            },
            {
                id: 3,
                title: "Sustainable Cooking: Reducing Your Carbon Footprint",
                excerpt: "Learn practical ways to make your cooking more environmentally friendly, from ingredient sourcing to energy-efficient cooking methods...",
                date: "2025-05-05",
                image: "https://readdy.ai/api/search-image?query=sustainable%20cooking%20ingredients%2C%20fresh%20vegetables%2C%20eco-friendly%20kitchen%2C%20plant-based%20food%20preparation%2C%20organic%20produce%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=3&orientation=landscape",
                tags: [
                    { name: "Cooking", color: "red" },
                    { name: "Sustainability", color: "green" }
                ]
            },
            {
                id: 4,
                title: "Investment Strategies for Economic Uncertainty",
                excerpt: "Discover how to protect and grow your wealth during volatile economic periods with these expert-backed investment approaches...",
                date: "2025-04-28",
                image: "https://readdy.ai/api/search-image?query=financial%20planning%20documents%2C%20calculator%2C%20graphs%20showing%20investment%20growth%2C%20modern%20desk%20setup%2C%20professional%20finance%20workspace%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=4&orientation=landscape",
                tags: [
                    { name: "Finance", color: "blue" },
                    { name: "Investing", color: "indigo" }
                ]
            },
            {
                id: 5,
                title: "Hidden Hiking Trails: Undiscovered Natural Wonders",
                excerpt: "Explore these lesser-known hiking destinations that offer breathtaking views and unique experiences without the crowds...",
                date: "2025-04-22",
                image: "https://readdy.ai/api/search-image?query=person%20hiking%20on%20mountain%20trail%2C%20adventure%20travel%2C%20scenic%20landscape%20view%2C%20outdoor%20exploration%2C%20nature%20photography%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=5&orientation=landscape",
                tags: [
                    { name: "Travel", color: "green" },
                    { name: "Adventure", color: "yellow" }
                ]
            },
            {
                id: 6,
                title: "Overcoming Writer's Block: Techniques from Famous Authors",
                excerpt: "Learn how renowned writers throughout history have conquered creative blocks and maintained consistent productivity...",
                date: "2025-04-15",
                image: "https://readdy.ai/api/search-image?query=creative%20writing%20workspace%2C%20notebook%20with%20pen%2C%20inspirational%20quotes%20on%20wall%2C%20cozy%20reading%20nook%2C%20literature%20books%2C%20high%20quality%20professional%20photo&width=600&height=400&seq=6&orientation=landscape",
                tags: [
                    { name: "Writing", color: "purple" },
                    { name: "Creativity", color: "pink" }
                ]
            },
            {
                id: 7,
                title: "The Future of AI in Healthcare",
                excerpt: "Explore how artificial intelligence is revolutionizing medical diagnostics, treatment plans, and patient care systems...",
                date: "2025-04-10",
                image: "https://ik.imagekit.io/jrt5mddp7/ba71ebcb-16dd-4029-aee6-45859d184a62.jpeg?updatedAt=1747458877800",
                tags: [
                    { name: "Healthcare", color: "blue" },
                    { name: "AI", color: "indigo" }
                ]
            },
            {
                id: 8,
                title: "Botanical Gardens of the World: A Visual Journey",
                excerpt: "Take a virtual tour of the most stunning botanical gardens across the globe, showcasing rare plant species and architectural wonders...",
                date: "2025-04-05",
                image: "https://ik.imagekit.io/jrt5mddp7/image.png",
                tags: [
                    { name: "Travel", color: "green" },
                    { name: "Nature", color: "lime" }
                ]
            },
            {
                id: 9,
                title: "Zero Waste Living: Practical Steps for Beginners",
                excerpt: "Start your journey to a more sustainable lifestyle with these achievable zero waste practices for everyday activities...",
                date: "2025-03-30",
                image: "https://ik.imagekit.io/jrt5mddp7/image(1).png",
                tags: [
                    { name: "Sustainability", color: "green" },
                    { name: "Lifestyle", color: "teal" }
                ]
            },
            {
                id: 10,
                title: "The Art of Digital Photography: Expert Techniques",
                excerpt: "Master the technical and artistic aspects of digital photography with these professional tips for composition, lighting, and post-processing...",
                date: "2025-03-25",
                image: "https://ik.imagekit.io/jrt5mddp7/image.png?updatedAt=1747459970031",
                tags: [
                    { name: "Photography", color: "blue" },
                    { name: "Art", color: "purple" }
                ]
            },
            {
                id: 11,
                title: "Data Privacy: Protecting Your Digital Footprint",
                excerpt: "Learn essential strategies to safeguard your personal information online and maintain privacy in an increasingly connected world...",
                date: "2025-03-20",
                image: "https://ik.imagekit.io/jrt5mddp7/cybersecurity?updatedAt=1747460233583",
                tags: [
                    { name: "Technology", color: "blue" },
                    { name: "Security", color: "red" }
                ]
            },
            {
                id: 12,
                title: "Ancient Meditation Practices for Modern Life",
                excerpt: "Discover how traditional meditation techniques from various cultures can be adapted to address contemporary stress and anxiety...",
                date: "2025-03-15",
                image: "https://ik.imagekit.io/jrt5mddp7/meditation.png",
                tags: [
                    { name: "Wellness", color: "green" },
                    { name: "History", color: "amber" }
                ]
            }
        ];

        // Function to format date string to readable format
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Function to create blog post card
        function createBlogPostCard(post) {
            const card = document.createElement('div');
            card.className = 'bg-white rounded shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1';
            card.dataset.date = post.date; // Store date for sorting purposes

            // Create tags HTML
            const tagsHTML = post.tags.map(tag => {
                return `<span class="bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag.name}</span>`;
            }).join('');

            card.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover object-top">
                <div class="p-5">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${tagsHTML}
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
                    <p class="text-gray-600 mb-4 line-clamp-2">${post.excerpt}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">${formatDate(post.date)}</span>
                    </div>
                </div>
            `;

            return card;
        }

        // Variables for pagination
        let currentPage = 1;
        const postsPerPage = 6;
        let filteredPosts = [...blogPosts];

        // Function to render blog posts based on current filters and pagination
        function renderBlogPosts() {
            const container = document.getElementById('blog-posts-container');
            container.innerHTML = '';

            const startIndex = 0;
            const endIndex = currentPage * postsPerPage;
            const postsToShow = filteredPosts.slice(startIndex, endIndex);

            postsToShow.forEach(post => {
                container.appendChild(createBlogPostCard(post));
            });

            // Hide/show load more button based on remaining posts
            const loadMoreBtn = document.getElementById('load-more-btn');
            if (endIndex >= filteredPosts.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        // Function to filter posts by date range
        function filterPostsByDate(option) {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to beginning of day

            const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
            const oneWeek = 7 * oneDay;
            const oneMonth = 30 * oneDay;
            const oneYear = 365 * oneDay;

            switch (option) {
                case 'newest':
                    filteredPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'oldest':
                    filteredPosts = [...blogPosts].sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'today':
                    filteredPosts = blogPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return postDate.toDateString() === today.toDateString();
                    });
                    break;
                case 'this-week':
                    filteredPosts = blogPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneWeek;
                    });
                    break;
                case 'this-month':
                    filteredPosts = blogPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneMonth;
                    });
                    break;
                case 'this-year':
                    filteredPosts = blogPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneYear;
                    });
                    break;
                default:
                    filteredPosts = [...blogPosts];
            }

            // Reset pagination
            currentPage = 1;
            renderBlogPosts();
        }

        // Event listener for sort selector
        document.getElementById('blog-sort').addEventListener('change', function() {
            filterPostsByDate(this.value);
        });

        // Event listener for load more button
        document.getElementById('load-more-btn').addEventListener('click', function() {
            currentPage++;
            renderBlogPosts();
        });

        // Initial render - newest first
        filterPostsByDate('newest');

        