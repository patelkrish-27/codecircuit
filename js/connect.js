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
            emailError.textContent = "Please enter a valid email address";
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

  // Get all unique tags from blog posts
        function getAllUniqueTags(posts) {
            const uniqueTags = new Set();
            posts.forEach(post => {
                post.tags.forEach(tag => {
                    uniqueTags.add(JSON.stringify(tag));
                });
            });
            return Array.from(uniqueTags).map(tag => JSON.parse(tag));
        }

        // Initialize selected tags array
        let selectedTags = [];

        
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
    const cardContainer = document.createElement('div');
    cardContainer.className = 'group [perspective:1000px] w-full';

    const card = document.createElement('div');
    card.className = `
        relative w-full h-96 duration-700 ease-in-out 
        [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)]
        transition-transform
    `;

    // Front face
    const front = document.createElement('div');
    front.className = `
        absolute w-full h-full 
        bg-white rounded shadow-sm overflow-hidden 
        [backface-visibility:hidden]
    `;
    front.dataset.date = post.date;

    const tagsHTML = post.tags.map(tag => {
        return `<span class="bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag.name}</span>`;
    }).join('');

    front.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="w-full h-44 object-cover object-top rounded-t">
        <div class="p-5">
            <div class="flex flex-wrap gap-2 mb-3">
                ${tagsHTML}
            </div>
            <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
            <span class="text-sm text-gray-500">${formatDate(post.date)}</span>
        </div>
    `;

    // Back face
    const back = document.createElement('div');
    back.className = `
        absolute w-full h-full 
        bg-white rounded shadow-sm overflow-hidden 
        [backface-visibility:hidden] [transform:rotateY(180deg)]
        p-5 flex items-center justify-center
    `;
    back.innerHTML = `<p class="text-gray-600 text-sm leading-relaxed text-center">${post.excerpt}</p>`;

    card.appendChild(front);
    card.appendChild(back);
    cardContainer.appendChild(card);

    return cardContainer;
}


        // Variables for pagination
        let currentPage = 1;
        const postsPerPage = 6;
        let filteredPosts = [...blogPosts];
        let currentSortOption = 'newest';

        // Function to render blog posts based on current filters and pagination
        function renderBlogPosts() {
            const container = document.getElementById('blog-posts-container');
            container.innerHTML = '';

            const startIndex = 0;
            const endIndex = currentPage * postsPerPage;
            const postsToShow = filteredPosts.slice(startIndex, endIndex);

            if (postsToShow.length === 0) {
                // Show no results message
                const noResults = document.createElement('div');
                noResults.className = 'col-span-full text-center py-10';
                noResults.innerHTML = `
                    <i class="ri-search-line text-gray-400 text-4xl mb-3"></i>
                    <h3 class="text-xl font-medium text-gray-500">No matching posts found</h3>
                    <p class="text-gray-400 mt-2">Try adjusting your filters or search criteria.</p>
                `;
                container.appendChild(noResults);
            } else {
                postsToShow.forEach(post => {
                    container.appendChild(createBlogPostCard(post));
                });
            }

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
            currentSortOption = option;
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to beginning of day

            const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
            const oneWeek = 7 * oneDay;
            const oneMonth = 30 * oneDay;
            const oneYear = 365 * oneDay;

            // First apply tag filters
            let tagFilteredPosts = blogPosts;
            if (selectedTags.length > 0) {
                tagFilteredPosts = blogPosts.filter(post => {
                    // Only include posts that have ALL selected tags (AND logic)
                    return selectedTags.every(selectedTag =>
                        post.tags.some(tag =>
                            selectedTag.name === tag.name && selectedTag.color === tag.color
                        )
                    );
                });
            }

            // Then apply date filter
            switch (option) {
                case 'newest':
                    filteredPosts = [...tagFilteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'oldest':
                    filteredPosts = [...tagFilteredPosts].sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'today':
                    filteredPosts = tagFilteredPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return postDate.toDateString() === today.toDateString();
                    });
                    break;
                case 'this-week':
                    filteredPosts = tagFilteredPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneWeek;
                    });
                    break;
                case 'this-month':
                    filteredPosts = tagFilteredPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneMonth;
                    });
                    break;
                case 'this-year':
                    filteredPosts = tagFilteredPosts.filter(post => {
                        const postDate = new Date(post.date);
                        return (today - postDate) <= oneYear;
                    });
                    break;
                default:
                    filteredPosts = [...tagFilteredPosts];
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

        // Filter modal functionality
        function setupFilterModal() {
            const filterBtn = document.getElementById('filter-btn');
            const filterModal = document.getElementById('filter-modal');
            const closeFilterModalBtn = document.getElementById('close-filter-modal');
            const applyFiltersBtn = document.getElementById('apply-filters');
            const clearFiltersBtn = document.getElementById('clear-filters');
            const filterTagsContainer = document.getElementById('filter-tags');

            // Get all unique tags
            const uniqueTags = getAllUniqueTags(blogPosts);

            // Populate filter modal with tags
            uniqueTags.forEach(tag => {
                const tagItem = document.createElement('div');
                tagItem.className = 'flex items-center';
                tagItem.innerHTML = `
                    <input type="checkbox" id="tag-${tag.name.toLowerCase().replace(/\s+/g, '-')}" 
                           class="tag-checkbox w-4 h-4 mr-2 accent-${tag.color}-600"
                           data-tag-name="${tag.name}" 
                           data-tag-color="${tag.color}">
                    <label for="tag-${tag.name.toLowerCase().replace(/\s+/g, '-')}" class="cursor-pointer flex items-center">
                        <span class="bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            ${tag.name}
                        </span>
                    </label>
                `;
                filterTagsContainer.appendChild(tagItem);
            });

            // Open modal
            filterBtn.addEventListener('click', () => {
                filterModal.classList.remove('hidden');
                // Update checkbox states based on currently selected tags
                document.querySelectorAll('.tag-checkbox').forEach(checkbox => {
                    const tagName = checkbox.dataset.tagName;
                    const tagColor = checkbox.dataset.tagColor;
                    checkbox.checked = selectedTags.some(tag => tag.name === tagName && tag.color === tagColor);
                });
            });

            // Close modal
            closeFilterModalBtn.addEventListener('click', () => {
                filterModal.classList.add('hidden');
            });

            // Close modal when clicking outside
            filterModal.addEventListener('click', (e) => {
                if (e.target === filterModal) {
                    filterModal.classList.add('hidden');
                }
            });

            // Apply filters
            applyFiltersBtn.addEventListener('click', () => {
                selectedTags = [];
                document.querySelectorAll('.tag-checkbox:checked').forEach(checkbox => {
                    selectedTags.push({
                        name: checkbox.dataset.tagName,
                        color: checkbox.dataset.tagColor
                    });
                });
                filterPostsByDate(currentSortOption);
                filterModal.classList.add('hidden');
            });

            // Clear all filters
            clearFiltersBtn.addEventListener('click', () => {
                document.querySelectorAll('.tag-checkbox').forEach(checkbox => {
                    checkbox.checked = false;
                });
                selectedTags = [];
                filterPostsByDate(currentSortOption);
                filterModal.classList.add('hidden');
            });
        }

        // Initialize the page
        setupFilterModal();
        filterPostsByDate('newest');

        document.getElementById("podcast-search").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        document.querySelectorAll("#podcasts .bg-white").forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();
            card.style.display = (title.includes(query) || description.includes(query)) ? "flex" : "none";
        });
    });


    // Podcast Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const podcastSearch = document.getElementById('podcast-search');
    const podcastItems = document.querySelectorAll('#podcasts .bg-white');
    const playButtons = document.querySelectorAll('#podcasts button .ri-play-fill').forEach(button => {
        button.parentElement.addEventListener('click', togglePlay);
    });
    const downloadButtons = document.querySelectorAll('#podcasts button .ri-download-2-line').forEach(button => {
        button.parentElement.addEventListener('click', downloadPodcast);
    });
    const shareButtons = document.querySelectorAll('#podcasts button .ri-share-line').forEach(button => {
        button.parentElement.addEventListener('click', sharePodcast);
    });

    // Search functionality
    podcastSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        podcastItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(item.querySelectorAll('.flex-wrap span')).map(tag => tag.textContent.toLowerCase());
            
            // Check if searchTerm exists in title, description or tags
            const matchesSearch = 
                title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                tags.some(tag => tag.includes(searchTerm));
            
            // Show/hide based on search match
            item.style.display = matchesSearch ? 'flex' : 'none';
        });
    });

    // Audio player state
    let currentlyPlaying = null;
    
    // Play/pause functionality
    function togglePlay(e) {
        const button = e.currentTarget;
        const podcastCard = button.closest('.bg-white');
        const podcastTitle = podcastCard.querySelector('h3').textContent;
        const playIcon = button.querySelector('i');
        
        // If there's already a podcast playing and it's not this one
        if (currentlyPlaying && currentlyPlaying !== button) {
            // Reset the previous playing button
            const prevPlayIcon = currentlyPlaying.querySelector('i');
            prevPlayIcon.classList.remove('ri-pause-fill');
            prevPlayIcon.classList.add('ri-play-fill');
        }
        
        // Toggle current button
        if (playIcon.classList.contains('ri-play-fill')) {
            // Play this podcast
            playIcon.classList.remove('ri-play-fill');
            playIcon.classList.add('ri-pause-fill');
            currentlyPlaying = button;
            
            // Simulate playing the podcast
            console.log(`Playing: ${podcastTitle}`);
            // Here you would typically invoke your audio player API
        } else {
            // Pause this podcast
            playIcon.classList.remove('ri-pause-fill');
            playIcon.classList.add('ri-play-fill');
            currentlyPlaying = null;
            
            // Simulate pausing the podcast
            console.log(`Paused: ${podcastTitle}`);
        }
    }
    
    // Download functionality
    function downloadPodcast(e) {
        const podcastCard = e.currentTarget.closest('.bg-white');
        const podcastTitle = podcastCard.querySelector('h3').textContent;
        
        // Simulate download (in a real app, this would trigger a file download)
        console.log(`Downloading: ${podcastTitle}`);
        
        // Visual feedback for user
        const button = e.currentTarget;
        const originalIcon = button.innerHTML;
        
        button.innerHTML = '<i class="ri-check-line"></i>';
        button.disabled = true;
        
        // Reset after 1 second
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.disabled = false;
        }, 1000);
    }
    
    // Share functionality
    function sharePodcast(e) {
        const podcastCard = e.currentTarget.closest('.bg-white');
        const podcastTitle = podcastCard.querySelector('h3').textContent;
        
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: podcastTitle,
                text: `Check out this podcast: ${podcastTitle}`,
                url: window.location.href,
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            // Fallback for browsers that don't support Web Share API
            alert(`Share this podcast: ${podcastTitle}\n${window.location.href}`);
        }
    }
    
    // View All Episodes button functionality
    const viewAllButton = document.querySelector('#podcasts button.bg-white.border');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            // Here you would typically navigate to a dedicated podcast page
            console.log('Viewing all episodes');
            // window.location.href = '/podcasts'; 
        });
    }
});

document.getElementById('podcast-search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const podcasts = document.querySelectorAll('#podcasts > div.space-y-4 > div');

    podcasts.forEach(podcast => {
      const title = podcast.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        podcast.style.display = '';
      } else {
        podcast.style.display = 'none';
      }
    });
  });

  // Quote Board with category filters and star ratings
document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            category: "Motivation",
            rating: 4
        },
        {
            text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
            author: "Steve Jobs",
            category: "Motivation",
            rating: 5
        },
        {
            text: "I'm not superstitious, but I am a little stitious.",
            author: "Michael Scott",
            category: "Humor",
            rating: 3
        },
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela",
            category: "Wisdom",
            rating: 5
        },
        {
            text: "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes.",
            author: "Jack Handey",
            category: "Humor",
            rating: 4
        },
        {
            text: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle",
            category: "Wisdom",
            rating: 4
        }
    ];

    let currentCategory = "All";

    const quotesList = document.getElementById('quotes-list');
    const filterButtons = document.querySelectorAll('#quote-category-filters button');

    function renderQuotes() {
        quotesList.innerHTML = '';
        const filtered = currentCategory === "All"
            ? quotes
            : quotes.filter(q => q.category === currentCategory);

        filtered.forEach((quote, idx) => {
            const stars = Array.from({ length: 5 }, (_, i) =>
                `<button class="w-6 h-6 flex items-center justify-center ${i < quote.rating ? 'text-yellow-400' : 'text-gray-300'} star-btn" data-idx="${idx}" data-star="${i + 1}">
                    <i class="ri-star-fill"></i>
                </button>`
            ).join('');
            const quoteHtml = `
                <div class="bg-white rounded shadow-sm p-6">
                    <div class="flex justify-between mb-4">
                        <span class="bg-${getCategoryColor(quote.category)}-100 text-${getCategoryColor(quote.category)}-800 text-xs font-medium px-2.5 py-0.5 rounded">${quote.category}</span>
                        <div class="flex">${stars}</div>
                    </div>
                    <blockquote class="text-lg italic text-gray-700 mb-4">"${quote.text}"</blockquote>
                    <div class="flex justify-between items-center">
                        <cite class="text-sm font-medium text-gray-600">— ${quote.author}</cite>
                        
                    </div>
                </div>
            `;
            quotesList.insertAdjacentHTML('beforeend', quoteHtml);
        });

        // Add star click listeners
        document.querySelectorAll('.star-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const idx = parseInt(this.getAttribute('data-idx'));
                const star = parseInt(this.getAttribute('data-star'));
                quotes[idx].rating = star;
                renderQuotes();
            });
        });
    }

    function getCategoryColor(category) {
        switch (category) {
            case "Motivation": return "blue";
            case "Humor": return "yellow";
            case "Wisdom": return "purple";
            default: return "gray";
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'border-primary');
                b.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
            });
            this.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
            this.classList.add('bg-primary', 'text-white', 'border-primary');
            currentCategory = this.getAttribute('data-category');
            renderQuotes();
        });
    });

    renderQuotes();
});
// ... existing code ...

// Markdown Editor Functionality
document.addEventListener('DOMContentLoaded', function () {
    const mdInput = document.getElementById('markdown-input');
    const mdPreview = document.getElementById('markdown-preview');
    const wordCount = document.getElementById('word-count');
    const charCount = document.getElementById('character-count');

    // Toolbar button functionality
    function insertAtCursor(before, after = '', placeholder = '') {
        if (!mdInput) return;
        const start = mdInput.selectionStart;
        const end = mdInput.selectionEnd;
        const selected = mdInput.value.substring(start, end) || placeholder;
        const newText = mdInput.value.substring(0, start) + before + selected + after + mdInput.value.substring(end);
        mdInput.value = newText;
        // Set cursor position
        mdInput.focus();
        mdInput.selectionStart = start + before.length;
        mdInput.selectionEnd = start + before.length + selected.length;
        updatePreview();
    }

    // Bold
    const boldBtn = document.querySelector('button[aria-label="Bold"], .ri-bold');
    if (boldBtn) {
        boldBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('**', '**', 'bold text');
        });
    }

    // Italic
    const italicBtn = document.querySelector('button[aria-label="Italic"], .ri-italic');
    if (italicBtn) {
        italicBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('*', '*', 'italic text');
        });
    }

    // Link
    const linkBtn = document.querySelector('button[aria-label="Link"], .ri-link');
    if (linkBtn) {
        linkBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('[', '](url)', 'link text');
        });
    }

    // Unordered List
    const ulBtn = document.querySelector('button[aria-label="Unordered List"], .ri-list-unordered');
    if (ulBtn) {
        ulBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('- ', '', 'list item');
        });
    }

    // Ordered List
    const olBtn = document.querySelector('button[aria-label="Ordered List"], .ri-list-ordered');
    if (olBtn) {
        olBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('1. ', '', 'list item');
        });
    }

    // Code
    const codeBtn = document.querySelector('button[aria-label="Code"], .ri-code-line');
    if (codeBtn) {
        codeBtn.parentElement.addEventListener('click', function (e) {
            e.preventDefault();
            insertAtCursor('```', '```', 'code');
        });
    }

    

    function renderMarkdown(text) {
        // Use a simple markdown parser or fallback to basic formatting
        if (window.marked) {
            return marked.parse(text);
        } else {
            return text
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
                .replace(/\*(.*?)\*/gim, '<i>$1</i>')
                .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
                .replace(/^\s*-\s+(.*)$/gim, '<ul><li>$1</li></ul>')
                .replace(/^\s*1\.\s+(.*)$/gim, '<ol><li>$1</li></ol>')
                .replace(/`{3}([\s\S]*?)`{3}/gim, '<pre><code>$1</code></pre>')
                .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />')
                .replace(/\n$/gim, '<br />');
        }
    }

    function updatePreview() {
        const text = mdInput.value;
        mdPreview.innerHTML = renderMarkdown(text);

        // Word and character count
        const words = text.trim().split(/\s+/).filter(Boolean);
        wordCount.textContent = `${words.length} words`;
        charCount.textContent = `${text.length} characters`;
    }

    if (mdInput && mdPreview && wordCount && charCount) {
        mdInput.addEventListener('input', updatePreview);
        updatePreview();
    }
});

// ... existing code ...

// Markdown Editor View Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Tab buttons
    const allTabBtns = document.querySelectorAll('#editor > div > div.flex > button, #editor .flex > button');
    const editorPane = document.querySelector('#markdown-input').parentElement;
    const previewPane = document.getElementById('markdown-preview').parentElement;
    const toolbarBtns = document.querySelectorAll(
        '#editor .md\\:flex-col button, #editor .md\\:flex-col .ri-bold, #editor .md\\:flex-col .ri-italic, #editor .md\\:flex-col .ri-link, #editor .md\\:flex-col .ri-list-unordered, #editor .md\\:flex-col .ri-list-ordered, #editor .md\\:flex-col .ri-code-line, #editor .md\\:flex-col .ri-image-line'
    );

    // Helper to set view
    function setEditorView(view) {
        // Remove active styles from all tabs
        allTabBtns.forEach(btn => {
            btn.classList.remove('text-primary', 'border-b-2', 'border-primary');
            btn.classList.add('text-gray-500');
        });

        // Show/hide panes based on view
        if (view === 'edit') {
            editorPane.style.display = '';
            previewPane.style.display = 'none';
            allTabBtns[0].classList.add('text-primary', 'border-b-2', 'border-primary');
            allTabBtns[0].classList.remove('text-gray-500');
            // Enable toolbar buttons
            toolbarBtns.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            });
        } else if (view === 'preview') {
            editorPane.style.display = 'none';
            previewPane.style.display = '';
            allTabBtns[1].classList.add('text-primary', 'border-b-2', 'border-primary');
            allTabBtns[1].classList.remove('text-gray-500');
            // Disable toolbar buttons
            toolbarBtns.forEach(btn => {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            });
        } else { // split
            editorPane.style.display = '';
            previewPane.style.display = '';
            allTabBtns[2].classList.add('text-primary', 'border-b-2', 'border-primary');
            allTabBtns[2].classList.remove('text-gray-500');
            // Enable toolbar buttons
            toolbarBtns.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            });
        }
    }

    // Set default to split view
    setEditorView('split');

    // Add click listeners to tab buttons
    if (allTabBtns.length >= 3) {
        allTabBtns[0].addEventListener('click', function () { setEditorView('edit'); });
        allTabBtns[1].addEventListener('click', function () { setEditorView('preview'); });
        allTabBtns[2].addEventListener('click', function () { setEditorView('split'); });
    }
});

// ... existing code ...

// Video Gallery with Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Video data
    const videos = [
        {
            id: 1,
            title: "Getting Started with Data Visualization",
            description: "Learn the fundamentals of creating effective data visualizations for your projects.",
            tags: [
                { name: "Tutorial", color: "blue" },
                { name: "Beginner", color: "purple" }
            ],
            author: "David Chen",
            authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "May 12, 2025",
            thumbnail: "https://img.youtube.com/vi/2LhoCfjm8R4/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/2LhoCfjm8R4"
        },
        {
            id: 2,
            title: "Personal Finance Strategies with Robert Miller",
            description: "Expert advice on building wealth, managing debt, and planning for a secure financial future.",
            tags: [
                { name: "Interview", color: "green" },
                { name: "Finance", color: "blue" }
            ],
            author: "Robert Miller",
            authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
            date: "April 28, 2025",
            thumbnail: "https://img.youtube.com/vi/5MgBikgcWnY/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/5MgBikgcWnY"
        },
        {
            id: 3,
            title: "UI/UX Design Principles and Best Practices",
            description: "Learn essential UI/UX design principles, best practices, and how to create user-friendly interfaces that engage and delight users.",
            tags: [
                { name: "Design", color: "pink" },
                { name: "Tutorial", color: "blue" }
            ],
            author: "DesignCourse",
            authorImg: "https://randomuser.me/api/portraits/men/41.jpg",
            date: "April 18, 2025",
            thumbnail: "https://i.ytimg.com/vi/lVDRN7XDdWY/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/lVDRN7XDdWY"
        },
        {
            id: 4,
            title: "Building Responsive Web Applications",
            description: "Learn modern techniques for creating web applications that work seamlessly across all devices.",
            tags: [
                { name: "Tutorial", color: "blue" },
                { name: "Intermediate", color: "indigo" }
            ],
            author: "Jennifer Park",
            authorImg: "https://randomuser.me/api/portraits/women/65.jpg",
            date: "April 25, 2025",
            thumbnail: "https://img.youtube.com/vi/1Rs2ND1ryYc/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc"
        },
        {
            id: 5,
            title: "The Future of AI",
            description: "An in-depth conversation about the ethical implications and future directions of artificial intelligence.",
            tags: [
                { name: "Interview", color: "green" },
                { name: "Expert", color: "red" }
            ],
            author: "Ted Talks",
            authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "May 8, 2025",
            thumbnail: "https://img.youtube.com/vi/QOKLW5ITEiI/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/QOKLW5ITEiI"
        },
        {
            id: 6,
            title: "Creative Design Workshop",
            description: "Collaborative brainstorming and UX design process in a real-world workshop.",
            tags: [
                { name: "Tutorial", color: "blue" },
                { name: "Design", color: "pink" }
            ],
            author: "Samantha Lee",
            authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
            date: "May 15, 2025",
            thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
            videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"
        }
    ];

    // Tag filter
    let currentTag = "All";

    // Elements
    const videoGallery = document.getElementById('video-gallery-list');
    const tagFilterContainer = document.getElementById('video-tag-filters');
    const modal = document.getElementById('video-modal');
    const modalContent = document.getElementById('video-modal-content');
    const modalCloseBtn = document.getElementById('video-modal-close');

    // Render tag filters
        // Render tag filters
        function renderTagFilters() {
            // Collect unique tags
            const tagSet = new Set();
            videos.forEach(video => video.tags.forEach(tag => tagSet.add(tag.name)));
            const tags = Array.from(tagSet);
    
            tagFilterContainer.innerHTML = `
                <button data-tag="All" class="px-4 py-2 rounded border !rounded-button whitespace-nowrap ${currentTag === "All" ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}">All</button>
                ${tags.map(tag =>
                    `<button data-tag="${tag}" class="px-4 py-2 rounded border !rounded-button whitespace-nowrap ${currentTag === tag ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}">${tag}</button>`
                ).join('')}
            `;
    
            // Add click listeners
            tagFilterContainer.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', function () {
                    // Update current tag
                    currentTag = this.dataset.tag;
                    
                    // Update button styles manually
                    tagFilterContainer.querySelectorAll('button').forEach(button => {
                        if (button.dataset.tag === currentTag) {
                            button.classList.remove('bg-white', 'text-gray-700', 'border-gray-200', 'hover:bg-gray-50');
                            button.classList.add('bg-primary', 'text-white', 'border-primary');
                        } else {
                            button.classList.remove('bg-primary', 'text-white', 'border-primary');
                            button.classList.add('bg-white', 'text-gray-700', 'border-gray-200', 'hover:bg-gray-50');
                        }
                    });
                    
                    // Render videos with the new filter
                    renderVideos();
                });
            });
        }

    // Render videos
    function renderVideos() {
        let filtered = currentTag === "All"
            ? videos
            : videos.filter(video => video.tags.some(tag => tag.name === currentTag));

        videoGallery.innerHTML = filtered.map(video => `
            <div class="bg-white rounded shadow-sm overflow-hidden cursor-pointer video-card" data-id="${video.id}">
                <div class="relative">
                    <img src="${video.thumbnail}" alt="Video thumbnail" class="w-full h-48 object-cover object-top">
                    <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button class="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all pointer-events-none">
                            <i class="ri-play-fill text-primary text-3xl"></i>
                        </button>
                    </div>
                    <span class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">${video.date}</span>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${video.tags.map(tag =>
                            `<span class="bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag.name}</span>`
                        ).join('')}
                    </div>
                    <h3 class="text-lg font-semibold mb-2">${video.title}</h3>
                    <p class="text-gray-600 text-sm mb-3">${video.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                                <img src="${video.authorImg}" alt="${video.author}" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-medium">${video.author}</span>
                        </div>
                        <span class="text-xs text-gray-500">${video.date}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click listeners to open modal
        videoGallery.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('click', function () {
                const videoId = parseInt(this.dataset.id);
                openVideoModal(videoId);
            });
        });
    }

    // Open modal
    function openVideoModal(videoId) {
        const video = videos.find(v => v.id === videoId);
        if (!video) return;

        modalContent.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg max-w-2xl w-full p-0 overflow-hidden">
                <div class="relative pb-[56.25%] h-0">
                    <iframe src="${video.videoUrl}" frameborder="0" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-t-lg"></iframe>
                </div>
                <div class="p-6">
                    <div class="flex flex-wrap gap-2 mb-2">
                        ${video.tags.map(tag =>
                            `<span class="bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag.name}</span>`
                        ).join('')}
                    </div>
                    <h2 class="text-2xl font-bold mb-2">${video.title}</h2>
                    <p class="text-gray-600 mb-4">${video.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                                <img src="${video.authorImg}" alt="${video.author}" class="w-full h-full object-cover">
                            </div>
                            <span class="text-base font-medium">${video.author}</span>
                        </div>
                        <span class="text-xs text-gray-500">${video.date}</span>
                    </div>
                </div>
                <button id="video-modal-close" class="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
                    <i class="ri-close-line"></i>
                </button>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Close modal
        document.getElementById('video-modal-close').onclick = closeVideoModal;
        modal.onclick = function (e) {
            if (e.target === modal) closeVideoModal();
        };
    }

    function closeVideoModal() {
        modal.classList.add('hidden');
        modalContent.innerHTML = '';
        document.body.style.overflow = '';
    }

    // Initial render
    if (videoGallery && tagFilterContainer && modal && modalContent) {
        renderTagFilters();
        renderVideos();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Enhanced Zine pages data with tags
    const zinePages = [
      {
        title: "Digital Futures",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Exploring the intersection of technology, society, and human potential. A collaborative zine featuring insights from leading thinkers, artists, and innovators about how emerging technologies are reshaping our world.",
        tags: ["Tech", "AI"]
      },
      {
        title: "Rise of AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "How artificial intelligence is transforming industries, creativity, and the way we live. From machine learning to neural networks, discover the technologies powering the AI revolution.",
        tags: ["AI"]
      },
      {
        title: "Virtual Realities",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Immersive experiences and the future of digital environments. Explore how VR and AR are creating new ways to work, play, and connect in virtual spaces.",
        tags: ["VR", "Tech"]
      },
      {
        title: "Sustainable Tech",
        image: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Green innovation and the role of technology in building a sustainable future. Discover how tech solutions are addressing climate change and environmental challenges.",
        tags: ["Tech"]
      }
    ];
    
    let currentPage = 0;
    let filteredPages = [...zinePages];
    let currentFilter = "All";
    
    // DOM Elements
    const pagesContainer = document.getElementById('zine-pages-container');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    const prevBtn = document.getElementById('zine-prev');
    const nextBtn = document.getElementById('zine-next');
    const fullscreenBtn = document.getElementById('zine-fullscreen');
    const downloadBtn = document.getElementById('zine-download');
    const thumbnails = document.getElementById('zine-thumbnails');
    const modal = document.getElementById('zine-modal');
    const modalImg = document.getElementById('zine-modal-img');
    const modalCaption = document.getElementById('zine-modal-caption');
    const modalClose = document.getElementById('zine-modal-close');
    const progressBar = document.getElementById('zine-progress');
    const tocBtn = document.getElementById('zine-toc');
    const tocModal = document.getElementById('zine-toc-modal');
    const tocContent = document.getElementById('zine-toc-content');
    const tocClose = document.getElementById('zine-toc-close');
    const tagFilters = document.querySelectorAll('.zine-tag-filter');
    
    // Apply tag filters
    function applyFilter(tag) {
      currentFilter = tag;
      
      // Update filter button styles
      tagFilters.forEach(btn => {
        if (btn.dataset.tag === tag) {
          btn.classList.remove('bg-gray-100', 'text-gray-700');
          btn.classList.add('bg-primary', 'text-white');
        } else {
          btn.classList.remove('bg-primary', 'text-white');
          btn.classList.add('bg-gray-100', 'text-gray-700');
        }
      });
      
      // Filter pages
      if (tag === "All") {
        filteredPages = [...zinePages];
      } else {
        filteredPages = zinePages.filter(page => page.tags.includes(tag));
      }
      
      // Reset to first page and update
      currentPage = 0;
      totalPagesSpan.textContent = filteredPages.length;
      renderPage(currentPage);
      renderThumbnails();
      updateProgressBar();
    }
    
    // Render current page
    function renderPage(idx) {
      if (filteredPages.length === 0) {
        pagesContainer.innerHTML = `
          <div class="h-full w-full flex flex-col items-center justify-center">
            <i class="ri-file-search-line text-5xl text-gray-300 mb-4"></i>
            <p class="text-gray-500 text-lg">No pages match the selected filter</p>
          </div>
        `;
        currentPageSpan.textContent = "0";
        return;
      }
      
      const page = filteredPages[idx];
      pagesContainer.innerHTML = `
        <div class="zine-page-content h-full w-full flex flex-col md:flex-row">
          <div class="md:w-1/2 flex flex-col justify-center p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              ${page.tags.map(tag => 
                `<span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">${tag}</span>`
              ).join('')}
            </div>
            <h3 class="text-3xl font-bold mb-4 text-primary">${page.title}</h3>
            <p class="text-lg mb-6 text-gray-700">${page.desc}</p>
          </div>
          <div class="md:w-1/2 flex items-center justify-center p-6">
            <img src="${page.image}" alt="${page.title}" class="zine-page-img" />
          </div>
        </div>
      `;
      currentPageSpan.textContent = idx + 1;
      
      // Animate in
      const content = document.querySelector('.zine-page-content');
      setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
      }, 50);
      
      // Image modal
      pagesContainer.querySelector('.zine-page-img').onclick = () => {
        modalImg.src = page.image;
        modalCaption.textContent = page.title + " - " + page.desc.substring(0, 100) + "...";
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
      };
      
      updateProgressBar();
    }
    
    // Update progress bar
    function updateProgressBar() {
      if (filteredPages.length === 0) {
        progressBar.style.width = "0%";
        return;
      }
      const progress = ((currentPage + 1) / filteredPages.length) * 100;
      progressBar.style.width = `${progress}%`;
    }
    
    // Render thumbnails
    function renderThumbnails() {
      thumbnails.innerHTML = filteredPages.map((page, idx) =>
        `<img src="${page.image}" alt="Page thumbnail" class="zine-thumb${idx === currentPage ? ' active' : ''}" data-idx="${idx}" />`
      ).join('');
      
      thumbnails.querySelectorAll('.zine-thumb').forEach(img => {
        img.onclick = () => {
          currentPage = parseInt(img.dataset.idx);
          renderPage(currentPage);
          renderThumbnails();
        };
      });
    }
    
    // Render table of contents
    function renderTOC() {
      tocContent.innerHTML = zinePages.map((page, idx) => {
        const isActive = filteredPages.includes(page) && 
                        filteredPages.indexOf(page) === currentPage;
        const isFiltered = currentFilter !== "All" && !page.tags.includes(currentFilter);
        
        return `
          <div class="toc-item p-3 border rounded ${isActive ? 'active border-primary' : 'border-gray-200'} 
                      ${isFiltered ? 'opacity-50' : ''}" data-idx="${idx}">
            <img src="${page.image}" alt="${page.title}" class="w-full h-24 object-cover rounded mb-2" />
            <h4 class="font-medium text-sm">${page.title}</h4>
            <div class="flex flex-wrap gap-1 mt-1">
              ${page.tags.map(tag => 
                `<span class="px-1.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">${tag}</span>`
              ).join('')}
            </div>
          </div>
        `;
      }).join('');
      
      tocContent.querySelectorAll('.toc-item').forEach((item, idx) => {
        item.onclick = () => {
          const pageIdx = parseInt(item.dataset.idx);
          const page = zinePages[pageIdx];
          
          // If current filter doesn't include this page, switch to All
          if (currentFilter !== "All" && !page.tags.includes(currentFilter)) {
            applyFilter("All");
          }
          
          // Find the index in filtered pages
          const filteredIdx = filteredPages.findIndex(p => p === page);
          if (filteredIdx !== -1) {
            currentPage = filteredIdx;
            renderPage(currentPage);
            renderThumbnails();
          }
          
          tocModal.classList.add('hidden');
        };
      });
    }
    
    // Navigation buttons
    prevBtn.onclick = () => {
      if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
        renderThumbnails();
      }
    };
    
    nextBtn.onclick = () => {
      if (currentPage < filteredPages.length - 1) {
        currentPage++;
        renderPage(currentPage);
        renderThumbnails();
      }
    };
    
    // Fullscreen button
    fullscreenBtn.onclick = () => {
      const img = pagesContainer.querySelector('.zine-page-img');
      if (img) {
        if (img.requestFullscreen) img.requestFullscreen();
        else if (img.webkitRequestFullscreen) img.webkitRequestFullscreen();
        else if (img.msRequestFullscreen) img.msRequestFullscreen();
      }
    };
    
    // Download button
    downloadBtn.onclick = () => {
      if (filteredPages.length === 0) return;
      
      const img = pagesContainer.querySelector('.zine-page-img');
      const link = document.createElement('a');
      link.href = img.src;
      link.download = filteredPages[currentPage].title.replace(/\s+/g, '_') + '.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    // Table of Contents button
    tocBtn.onclick = () => {
      renderTOC();
      tocModal.classList.remove('hidden');
      setTimeout(() => tocModal.classList.add('visible'), 10);
    };
    
    // Modal close buttons
    modalClose.onclick = () => {
      modal.classList.remove('visible');
      setTimeout(() => modal.classList.add('hidden'), 300);
    };
    
    tocClose.onclick = () => {
      tocModal.classList.remove('visible');
      setTimeout(() => tocModal.classList.add('hidden'), 300);
    };
    
    // Close modals when clicking outside
    modal.onclick = e => { 
      if (e.target === modal) {
        modal.classList.remove('visible');
        setTimeout(() => modal.classList.add('hidden'), 300);
      }
    };
    
    tocModal.onclick = e => { 
      if (e.target === tocModal) {
        tocModal.classList.remove('visible');
        setTimeout(() => tocModal.classList.add('hidden'), 300);
      }
    };
    
    // Tag filters
    tagFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        applyFilter(btn.dataset.tag);
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (modal.classList.contains('hidden') && tocModal.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') prevBtn.click();
        else if (e.key === 'ArrowRight') nextBtn.click();
      } else {
        if (e.key === 'Escape') {
          if (!modal.classList.contains('hidden')) modalClose.click();
          if (!tocModal.classList.contains('hidden')) tocClose.click();
        }
      }
    });
    
    // Initial render
    totalPagesSpan.textContent = filteredPages.length;
    renderPage(currentPage);
    renderThumbnails();
  });
// Podcast Player Logic
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('podcast-audio');
    const playBtn = document.getElementById('podcast-play');
    const playIcon = document.getElementById('podcast-play-icon');
    const progressBar = document.getElementById('podcast-progress-bar');
    const progressHandle = document.getElementById('podcast-progress-handle');
    const currentTimeEl = document.getElementById('podcast-current-time');
    const totalTimeEl = document.getElementById('podcast-total-time');
    const durationEl = document.getElementById('podcast-duration');
    const rewindBtn = document.getElementById('podcast-rewind');
    const forwardBtn = document.getElementById('podcast-forward'); 
    const speedBtn = document.getElementById('podcast-speed');
    const speedLabel = document.getElementById('podcast-speed-label');
    const muteBtn = document.getElementById('podcast-mute');
    const muteIcon = document.getElementById('podcast-mute-icon');
    const notes = document.querySelectorAll('.podcast-timestamp');

    // --- SVG Waveform Animation Setup ---
    const waveMain = document.getElementById('wave-main');
    const waveBg = document.getElementById('wave-bg');
    let waveAnimFrame = null;
    let phase = 0;

    function generateWavePoints(amplitude = 12, offset = 40, freq = 0.18, phaseShift = 0) {
        let points = [];
        for (let x = 0; x <= 600; x += 10) {
            let y = offset + Math.sin((x * freq) + phase + phaseShift) * amplitude + Math.random() * 4 - 2;
            points.push(`${x},${y.toFixed(1)}`);
        }
        return points.join(' ');
    }

    function animateWave() {
        waveMain && waveMain.setAttribute('points', generateWavePoints(12, 40, 0.18, 0));
        waveBg && waveBg.setAttribute('points', generateWavePoints(16, 50, 0.16, Math.PI / 2));
        phase += 0.18;
        waveAnimFrame = requestAnimationFrame(animateWave);
    }

    function stopWave() {
        if (waveAnimFrame) {
            cancelAnimationFrame(waveAnimFrame);
            waveAnimFrame = null;
        }
    }

    // Format seconds as mm:ss
    function formatTime(sec) {
        sec = Math.floor(sec);
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    // Update progress bar and handle
    function updateProgress() {
        const percent = (audio.currentTime / audio.duration) * 100 || 0;
        progressBar.style.width = percent + '%';
        progressHandle.style.left = `calc(${percent}% - 8px)`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }

    // Set total time when metadata is loaded
    audio.addEventListener('loadedmetadata', function () {
        totalTimeEl.textContent = formatTime(audio.duration);
        durationEl.textContent = formatTime(audio.duration);
    });

    // Play/Pause toggle
    playBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', function () {
        playIcon.classList.remove('ri-play-fill');
        playIcon.classList.add('ri-pause-fill');
        if (!waveAnimFrame) animateWave();
    });
    audio.addEventListener('pause', function () {
        playIcon.classList.remove('ri-pause-fill');
        playIcon.classList.add('ri-play-fill');
        stopWave();
    });
    audio.addEventListener('ended', stopWave);

    // Progress bar update
    audio.addEventListener('timeupdate', updateProgress);

    // Seek by clicking progress bar
    progressBar.parentElement.parentElement.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = x / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Drag handle
    let dragging = false;
    progressHandle.addEventListener('mousedown', function (e) {
        dragging = true;
        document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        const rect = progressBar.parentElement.parentElement.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percent = x / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    document.addEventListener('mouseup', function () {
        dragging = false;
        document.body.style.userSelect = '';
    });

    // Rewind 15s
    rewindBtn.addEventListener('click', function () {
        audio.currentTime = Math.max(0, audio.currentTime - 15);
    });
// Forward 15s
forwardBtn.addEventListener('click', function () {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 15);
});
    // Speed toggle
    const speeds = [1, 1.25, 1.5, 2];
    let speedIdx = 0;
    if (speedBtn && speedLabel) {
        speedBtn.addEventListener('click', function () {
            speedIdx = (speedIdx + 1) % speeds.length;
            audio.playbackRate = speeds[speedIdx];
            speedLabel.textContent = speeds[speedIdx] + 'x';
        });
    }

    // Mute toggle
    muteBtn.addEventListener('click', function () {
        audio.muted = !audio.muted;
        muteIcon.className = audio.muted ? 'ri-volume-mute-line' : 'ri-volume-up-line';
    });

    // Timestamp notes click
    notes.forEach(btn => {
        btn.addEventListener('click', function () {
            audio.currentTime = parseInt(btn.dataset.time, 10);
            audio.play();
        });
    });

    // Initialize UI
    audio.addEventListener('loadedmetadata', updateProgress);
    if (audio.readyState >= 1) {
        updateProgress();
        totalTimeEl.textContent = formatTime(audio.duration);
        durationEl.textContent = formatTime(audio.duration);
    }

    // Optionally: Start with animation if audio is already playing
    if (!audio.paused) animateWave();
});

// ... existing code ...
// newsletterBuilder
document.addEventListener('DOMContentLoaded', function () {
    // --- Newsletter Builder Drag & Drop ---
    const componentList = [
        {
            type: 'heading',
            label: 'Heading',
            icon: 'ri-heading',
            html: (content = 'Newsletter Heading', props = {}) =>
                `<h3 class="newsletter-editable text-2xl font-bold text-center mb-2"
                    style="${props.color ? `color:${props.color};` : ''}${props.textAlign ? `text-align:${props.textAlign};` : ''}${props.fontSize ? `font-size:${props.fontSize};` : ''}${props.padding ? `padding:${props.padding};` : ''}">
                    ${content}
                </h3>`
        },
        {
            type: 'text',
            label: 'Text Block',
            icon: 'ri-text',
            html: (content = 'Your newsletter text goes here.', props = {}) =>
                `<p class="newsletter-editable text-gray-500 text-center"
                    style="${props.color ? `color:${props.color};` : ''}${props.textAlign ? `text-align:${props.textAlign};` : ''}${props.fontSize ? `font-size:${props.fontSize};` : ''}${props.padding ? `padding:${props.padding};` : ''}">
                    ${content}
                </p>`
        },
        {
            type: 'image',
            label: 'Image',
            icon: 'ri-image-line',
            html: (src = 'https://via.placeholder.com/600x200?text=Newsletter+Image', props = {}) =>
                `<img src="${src}" alt="Newsletter image" class="newsletter-editable w-full h-auto rounded mb-2"
                    style="cursor:pointer;${props.padding ? `padding:${props.padding};` : ''}" />`
        },
        {
            type: 'two-columns',
            label: 'Two Columns',
            icon: 'ri-layout-2-line',
            html: (content = { left: 'Left column', right: 'Right column' }, props = {}) =>
                `<div class="flex gap-4 newsletter-editable" style="${props.padding ? `padding:${props.padding};` : ''}">
                    <div class="flex-1 bg-gray-50 p-2 rounded" style="${props.leftColor ? `color:${props.leftColor};` : ''}">${content.left}</div>
                    <div class="flex-1 bg-gray-50 p-2 rounded" style="${props.rightColor ? `color:${props.rightColor};` : ''}">${content.right}</div>
                </div>`
        },
        {
            type: 'divider',
            label: 'Divider',
            icon: 'ri-separator',
            html: (content = '', props = {}) =>
                `<hr class="newsletter-editable my-4" style="${props.color ? `border-color:${props.color};` : ''}${props.padding ? `padding:${props.padding};` : ''}" />`
        },
        {
            type: 'button',
            label: 'Button',
            icon: 'ri-link',
            html: (content = 'Click Me', props = {}) =>
                `<button class="newsletter-editable px-4 py-2 bg-primary text-white rounded"
                    style="${props.color ? `background-color:${props.color};` : ''}${props.textAlign ? `text-align:${props.textAlign};` : ''}${props.fontSize ? `font-size:${props.fontSize};` : ''}${props.padding ? `padding:${props.padding};` : ''}">
                    ${content}
                </button>`
        },
        {
            type: 'list',
            label: 'List',
            icon: 'ri-list-check-2',
            html: (content = ['List item 1', 'List item 2'], props = {}) =>
                `<ul class="newsletter-editable list-disc pl-6" style="${props.color ? `color:${props.color};` : ''}${props.padding ? `padding:${props.padding};` : ''}">
                    ${content.map(item => `<li>${item}</li>`).join('')}
                </ul>`
        },
        {
            type: 'social',
            label: 'Social Icons',
            icon: 'ri-layout-grid-line',
            html: (content = '', props = {}) =>
                `<div class="newsletter-editable flex gap-2 justify-center" style="${props.padding ? `padding:${props.padding};` : ''}">
                    <i class="ri-facebook-circle-fill text-blue-600 text-2xl"></i>
                    <i class="ri-twitter-x-line text-black text-2xl"></i>
                    <i class="ri-linkedin-box-fill text-blue-700 text-2xl"></i>
                </div>`
        }
    ];

    // --- State ---
    let selectedBlock = null;
    let selectedBlockData = null;

    // Make sidebar items draggable
    document.querySelectorAll('.drag-item').forEach((item, idx) => {
        item.setAttribute('draggable', 'true');
        item.dataset.componentType = componentList[idx].type;
        item.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('component-type', this.dataset.componentType);
        });
    });

    // Canvas drop logic
    const canvas = document.getElementById('newsletter-canvas');
    const placeholder = document.getElementById('newsletter-placeholder');

    canvas.addEventListener('dragover', function (e) {
        e.preventDefault();
        canvas.classList.add('border-primary');
    });
    canvas.addEventListener('dragleave', function () {
        canvas.classList.remove('border-primary');
    });
    canvas.addEventListener('drop', function (e) {
        e.preventDefault();
        canvas.classList.remove('border-primary');
        const type = e.dataTransfer.getData('component-type');
        addComponentToCanvas(type);
    });

    // --- Sidebar property panel elements ---
    const propPanel = document.getElementById('properties-panel');
    const propText = document.getElementById('prop-text');
    const propFontSize = document.getElementById('prop-font-size');
    const propPadding = document.getElementById('prop-padding');

    // Helper: get default data for a component type
    function getDefaultData(type) {
        switch (type) {
            case 'heading': return { content: 'Newsletter Heading', props: { fontSize: '2rem', textAlign: 'center', color: '#000', padding: '0' } };
            case 'text': return { content: 'Your newsletter text goes here.', props: { fontSize: '1rem', textAlign: 'center', color: '#6b7280', padding: '0' } };
            case 'image': return { content: 'https://via.placeholder.com/600x200?text=Newsletter+Image', props: { padding: '0' } };
            case 'two-columns': return { content: { left: 'Left column', right: 'Right column' }, props: { padding: '0' } };
            case 'divider': return { content: '', props: { color: '#e5e7eb', padding: '0' } };
            case 'button': return { content: 'Click Me', props: { fontSize: '1rem', textAlign: 'center', color: '#6366f1', padding: '0' } };
            case 'list': return { content: ['List item 1', 'List item 2'], props: { color: '#000', padding: '0' } };
            case 'social': return { content: '', props: { padding: '0' } };
            default: return { content: '', props: {} };
        }
    }

    function addComponentToCanvas(type) {
        const comp = componentList.find(c => c.type === type);
        if (!comp) return;
        if (placeholder) placeholder.style.display = 'none';

        // Get default data for this component
        const data = getDefaultData(type);

        // Create wrapper for controls
        const wrapper = document.createElement('div');
        wrapper.className = 'bg-white rounded shadow-sm p-4 mb-4 relative newsletter-block';
        wrapper.setAttribute('draggable', 'true');
        wrapper.dataset.type = type;
        wrapper.dataset.content = JSON.stringify(data.content);
        wrapper.dataset.props = JSON.stringify(data.props);

        // Controls (move up/down/delete)
       // ... existing code ...
        // Controls (move up/down/delete)
        wrapper.innerHTML = `
            <div class="absolute top-2 right-2 flex space-x-1 newsletter-controls">
                <button class="move-up w-6 h-6 flex items-center justify-center rounded bg-white hover:bg-gray-100 text-gray-500" title="Move Up"><i class="ri-arrow-up-line"></i></button>
                <button class="move-down w-6 h-6 flex items-center justify-center rounded bg-white hover:bg-gray-100 text-gray-500" title="Move Down"><i class="ri-arrow-down-line"></i></button>
                <button class="delete w-6 h-6 flex items-center justify-center rounded bg-white hover:bg-gray-100 text-gray-500" title="Delete"><i class="ri-delete-bin-line"></i></button>
            </div>
            <div class="newsletter-content">${comp.html(data.content, data.props)}</div>
        `;

        // Add to canvas
        canvas.appendChild(wrapper);

        // Controls logic
        wrapper.querySelector('.move-up').onclick = () => {
            if (wrapper.previousElementSibling) {
                canvas.insertBefore(wrapper, wrapper.previousElementSibling);
            }
        };
        wrapper.querySelector('.move-down').onclick = () => {
            if (wrapper.nextElementSibling) {
                canvas.insertBefore(wrapper.nextElementSibling, wrapper);
            }
        };
        wrapper.querySelector('.delete').onclick = () => {
            if (selectedBlock === wrapper) {
                clearSidebar();
            }
            wrapper.remove();
            if (canvas.querySelectorAll('.newsletter-block').length === 0 && placeholder) {
                placeholder.style.display = '';
            }
        };

        // Image upload for image blocks
        if (type === 'image') {
            const img = wrapper.querySelector('img');
            img.addEventListener('click', () => {
                if (selectedBlock !== wrapper) selectBlock(wrapper);
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = e => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = ev => {
                            updateBlockData(wrapper, { content: ev.target.result });
                        };
                        reader.readAsDataURL(file);
                    }
                };
                input.click();
            });
        }

        // --- Make the block draggable for reordering ---
        wrapper.addEventListener('dragstart', function (e) {
            wrapper.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        wrapper.addEventListener('dragend', function () {
            wrapper.classList.remove('dragging');
        });

        // --- Select block on click ---
        wrapper.addEventListener('click', function (e) {
            // Prevent click bubbling from controls
            if (e.target.closest('.newsletter-controls')) return;
            selectBlock(wrapper);
        });
    }

    // --- Drag and drop reordering logic for blocks ---
    let draggingBlock = null;

    canvas.addEventListener('dragstart', function (e) {
        if (e.target.classList.contains('newsletter-block')) {
            draggingBlock = e.target;
            draggingBlock.classList.add('dragging');
        }
    });

    canvas.addEventListener('dragend', function (e) {
        if (draggingBlock) {
            draggingBlock.classList.remove('dragging');
            draggingBlock = null;
        }
    });

    canvas.addEventListener('dragover', function (e) {
        e.preventDefault();
        const afterElement = getDragAfterElement(canvas, e.clientY);
        if (draggingBlock && afterElement && afterElement !== draggingBlock) {
            canvas.insertBefore(draggingBlock, afterElement);
        } else if (draggingBlock && !afterElement) {
            canvas.appendChild(draggingBlock);
        }
    });

    function getDragAfterElement(container, y) {
        const blocks = [...container.querySelectorAll('.newsletter-block:not(.dragging)')];
        return blocks.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: -Infinity }).element;
    }

    // --- Sidebar logic ---
    function selectBlock(block) {
        if (selectedBlock) selectedBlock.classList.remove('ring-2', 'ring-primary');
        selectedBlock = block;
        selectedBlock.classList.add('ring-2', 'ring-primary');

        // Load data
        const type = block.dataset.type;
        let content = JSON.parse(block.dataset.content || '""');
        let props = JSON.parse(block.dataset.props || '{}');

        selectedBlockData = { type, content, props };

        // Show sidebar and populate fields
        if (propPanel) propPanel.style.display = '';
        if (propText) propText.value = typeof content === 'string' ? content : (content.left || '');
        if (propFontSize) {
            // Map font-size to dropdown value
            let fontSize = 'Medium';
            if (props.fontSize === '2.5rem') fontSize = 'Extra Large';
            else if (props.fontSize === '2rem') fontSize = 'Large';
            else if (props.fontSize === '1.25rem') fontSize = 'Medium';
            else if (props.fontSize === '1rem') fontSize = 'Small';
            propFontSize.value = fontSize;
        }
        // Alignment buttons
        ['left', 'center', 'right'].forEach(align => {
            const btn = document.getElementById('prop-align-' + align);
            if (btn) {
                btn.classList.toggle('bg-primary', props.textAlign === align);
                btn.classList.toggle('text-white', props.textAlign === align);
                btn.classList.toggle('bg-white', props.textAlign !== align);
                btn.classList.toggle('text-gray-700', props.textAlign !== align);
            }
        });
        // Color buttons
        document.querySelectorAll('#prop-color-group button[type="button"]').forEach(btn => {
            btn.classList.toggle('border-2', btn.dataset.color === props.color);
            btn.classList.toggle('border-primary', btn.dataset.color === props.color);
        });
        if (propPadding) {
            propPadding.value = parseInt(props.padding || 0, 10);
            const padVal = document.getElementById('prop-padding-value');
            if (padVal) padVal.textContent = (props.padding || 0) + 'px';
        }
    }

    function clearSidebar() {
        if (selectedBlock) selectedBlock.classList.remove('ring-2', 'ring-primary');
        selectedBlock = null;
        selectedBlockData = null;
        if (propPanel) propPanel.style.display = 'none';
    }

    function updateBlockData(block, changes) {
        if (!selectedBlockData) return;
        
        let data = {
            ...selectedBlockData,
            ...changes,
            content: changes.content !== undefined ? changes.content : selectedBlockData.content,
            props: { ...selectedBlockData.props, ...changes.props }
        };
        selectedBlockData = data;
        block.dataset.content = JSON.stringify(data.content);
        block.dataset.props = JSON.stringify(data.props);

        const comp = componentList.find(c => c.type === data.type);
        block.querySelector('.newsletter-content').innerHTML = comp.html(data.content, data.props);
    }

    // --- Sidebar event listeners ---
    if (propText) {
        propText.addEventListener('input', function () {
            if (!selectedBlock) return;
            updateBlockData(selectedBlock, { content: propText.value });
        });
    }
    if (propFontSize) {
        propFontSize.addEventListener('change', function () {
            if (!selectedBlock) return;
            let size = '1rem';
             if (propFontSize.value === 'Extra Large') size = '2.5rem';
            if (propFontSize.value === 'Large') size = '2rem';
            else if (propFontSize.value === 'Medium') size = '1.25rem';
            else if (propFontSize.value === 'Small') size = '1rem';
            updateBlockData(selectedBlock, { props: { fontSize: size } });
        });
    }
    ['left', 'center', 'right'].forEach(align => {
        const btn = document.getElementById('prop-align-' + align);
        if (btn) {
            btn.addEventListener('click', function () {
                if (!selectedBlock) return;
                updateBlockData(selectedBlock, { props: { textAlign: align } });
                selectBlock(selectedBlock); // Refresh highlight
            });
        }
    });
    document.querySelectorAll('#prop-color-group button[type="button"]').forEach(btn => {
        btn.addEventListener('click', function () {
            if (!selectedBlock) return;
            updateBlockData(selectedBlock, { props: { color: btn.dataset.color } });
            selectBlock(selectedBlock); // Refresh highlight
        });
    });
    if (propPadding) {
        propPadding.addEventListener('input', function () {
            if (!selectedBlock) return;
            updateBlockData(selectedBlock, { props: { padding: propPadding.value + 'px' } });
            const padVal = document.getElementById('prop-padding-value');
            if (padVal) padVal.textContent = propPadding.value + 'px';
        });
    }

    // *** NEW CODE: Initialize example blocks to be selectable ***
    function initializeExistingBlocks() {
        // Find all existing blocks in the canvas
        const existingBlocks = canvas.querySelectorAll('.bg-white.rounded.shadow-sm.p-4.mb-4.relative:not(.newsletter-block)');
        
        existingBlocks.forEach(block => {
            // Add the newsletter-block class
            block.classList.add('newsletter-block');
            
            // Set draggable attribute
            block.setAttribute('draggable', 'true');
            
            // Determine the component type based on content
            let type, content, props = {};
            
            if (block.querySelector('h3')) {
                type = 'heading';
                content = block.querySelector('h3').textContent.trim();
                props = { fontSize: '2rem', textAlign: 'center', color: '#000', padding: '0' };
            } else if (block.querySelector('img')) {
                type = 'image';
                content = block.querySelector('img').src;
                props = { padding: '0' };
            } else if (block.querySelector('p')) {
                type = 'text';
                content = block.querySelectorAll('p').length > 1 
                    ? Array.from(block.querySelectorAll('p')).map(p => p.textContent.trim()).join('\n')
                    : block.querySelector('p').textContent.trim();
                props = { fontSize: '1rem', textAlign: 'left', color: '#374151', padding: '0' };
            }
            
            // Set data attributes
            block.dataset.type = type;
            block.dataset.content = JSON.stringify(content);
            block.dataset.props = JSON.stringify(props);
            
            // Rename content div if needed
            const contentDiv = block.querySelector(':scope > div:not(.absolute)');
            if (contentDiv) {
                contentDiv.classList.add('newsletter-content');
            } else {
                // Wrap content in newsletter-content div if not present
                const wrapper = document.createElement('div');
                wrapper.className = 'newsletter-content';
                
                // Move all content except controls into wrapper
                Array.from(block.childNodes).forEach(node => {
                    if (!node.classList || !node.classList.contains('absolute')) {
                        wrapper.appendChild(node.cloneNode(true));
                    }
                });
                
                // Clear block and append controls and new wrapper
                const controls = block.querySelector('.absolute');
                block.innerHTML = '';
                if (controls) block.appendChild(controls);
                block.appendChild(wrapper);
            }
            
            // Convert control buttons to functional ones
            const controlsDiv = block.querySelector('.absolute');
            if (controlsDiv) {
                const buttons = controlsDiv.querySelectorAll('button');
                if (buttons.length >= 3) {
                    buttons[0].className = 'move-up w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500';
                    buttons[1].className = 'move-down w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500';
                    buttons[2].className = 'delete w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500';
                    
                    controlsDiv.className = 'absolute top-2 right-2 flex space-x-1 newsletter-controls';
                    
                    // Add event listeners to buttons
                    buttons[0].onclick = () => {
                        if (block.previousElementSibling) {
                            canvas.insertBefore(block, block.previousElementSibling);
                        }
                    };
                    buttons[1].onclick = () => {
                        if (block.nextElementSibling) {
                            canvas.insertBefore(block.nextElementSibling, block);
                        }
                    };
                    buttons[2].onclick = () => {
                        if (selectedBlock === block) {
                            clearSidebar();
                        }
                        block.remove();
                        if (canvas.querySelectorAll('.newsletter-block').length === 0 && placeholder) {
                            placeholder.style.display = '';
                        }
                    };
                }
            }
            
            // Add click event to select the block
            block.addEventListener('click', function(e) {
                // Prevent click bubbling from controls
                if (e.target.closest('.newsletter-controls')) return;
                selectBlock(block);
            });
            
            // Add drag events
            block.addEventListener('dragstart', function(e) {
                block.classList.add('dragging');
                draggingBlock = block;
                e.dataTransfer.effectAllowed = 'move';
            });
            block.addEventListener('dragend', function() {
                block.classList.remove('dragging');
                draggingBlock = null;
            });
        });
    }
    
    // Run initialization for existing blocks
    initializeExistingBlocks();

    function showNewsletterToast(msg) {
        const toast = document.getElementById('newsletter-toast');
        toast.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }
    
    // Preview Modal
    const previewBtn = document.getElementById('newsletter-preview-btn');
    const previewModal = document.getElementById('newsletter-preview-modal');
    const previewClose = document.getElementById('newsletter-preview-close');
    const previewContent = document.getElementById('newsletter-preview-content');
    
    // Save Draft
    const saveBtn = document.getElementById('newsletter-save-btn');
    
    // Send Newsletter
    const sendBtn = document.getElementById('newsletter-send-btn');
    const sendSpinner = document.getElementById('newsletter-send-spinner');
    const successModal = document.getElementById('newsletter-success-modal');
    const successClose = document.getElementById('newsletter-success-close');
    
    // Get newsletter HTML content
    function getNewsletterHTML() {
        const canvas = document.getElementById('newsletter-canvas');
        // Clone to avoid including the placeholder
        const clone = canvas.cloneNode(true);
        // Remove placeholder if present
        const placeholder = clone.querySelector('#newsletter-placeholder');
        if (placeholder) placeholder.remove();
        return clone.innerHTML;
    }
    
    // Preview Button
    if (previewBtn && previewModal && previewContent) {
        previewBtn.addEventListener('click', function() {
            previewBtn.classList.add('scale-95');
            setTimeout(() => previewBtn.classList.remove('scale-95'), 120);
            previewContent.innerHTML = getNewsletterHTML();
            previewModal.classList.remove('hidden');
        });
    }
    if (previewClose && previewModal) {
        previewClose.addEventListener('click', function() {
            previewModal.classList.add('hidden');
        });
    }
    
    // Save Draft Button
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            saveBtn.classList.add('scale-95');
            setTimeout(() => saveBtn.classList.remove('scale-95'), 120);
            const html = getNewsletterHTML();
            localStorage.setItem('newsletter-draft', html);
            showNewsletterToast('Draft saved locally!');
        });
    }
    
    // Send Newsletter Button
    if (sendBtn && sendSpinner && successModal) {
        sendBtn.addEventListener('click', function() {
            if (sendBtn.disabled) return;
            sendBtn.classList.add('scale-95');
            sendBtn.disabled = true;
            sendSpinner.classList.remove('hidden');
            setTimeout(() => {
                sendSpinner.classList.add('hidden');
                sendBtn.disabled = false;
                sendBtn.classList.remove('scale-95');
                successModal.classList.remove('hidden');
            }, 1500); // Simulate sending delay
        });
    }
    if (successClose && successModal) {
        successClose.addEventListener('click', function() {
            successModal.classList.add('hidden');
        });
    }

    function selectBlock(block) {
        if (selectedBlock) selectedBlock.classList.remove('ring-2', 'ring-primary');
        selectedBlock = block;
        selectedBlock.classList.add('ring-2', 'ring-primary');
    
        // Load data
        const type = block.dataset.type;
        let content = JSON.parse(block.dataset.content || '""');
        let props = JSON.parse(block.dataset.props || '{}');
    
        selectedBlockData = { type, content, props };
    
        // Show sidebar and populate fields
        if (propPanel) {
            propPanel.style.display = '';
            // Disable properties panel if image is selected
            if (type === 'image') {
                propPanel.classList.add('disabled');
            } else {
                propPanel.classList.remove('disabled');
            }
        }
        // ... rest of your code ...
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // --- Paper Data (expanded collection of academic papers) ---
    const papers = [
        {
            id: 1,
            title: "Transformers for Time Series Forecasting: A Comprehensive Survey",
            authors: "Zhang, L., Chen, W., Tao, D., Wang, J., & Li, K.",
            year: 2025,
            type: "article",
            subject: "cs",
            journal: "IEEE Transactions on Neural Networks and Learning Systems",
            citations: 287,
            access: "open",
            tags: ["Computer Science", "Open Access"],
            description: "This survey provides a comprehensive overview of transformer-based models for time series forecasting, analyzing their architectures, training strategies, and performance across various domains."
        },
        {
            id: 2,
            title: "MultiModal-GPT: A Vision and Language Model for Dialogue with Humans",
            authors: "Johnson, R., Patel, S., Garcia, M., & Smith, A.",
            year: 2025,
            type: "conference",
            subject: "cs",
            journal: "Proceedings of CVPR 2025",
            citations: 156,
            access: "conference",
            tags: ["Computer Science", "Conference"],
            description: "This paper introduces a novel architecture for integrating visual and textual information in large language models, enabling more natural multimodal interactions in conversational AI systems."
        },
        {
            id: 3,
            title: "CRISPR-Cas9 Optimization for Therapeutic Applications in Human Stem Cells",
            authors: "Nguyen, H., Williams, E., Takahashi, K., & Brown, L.",
            year: 2025,
            type: "article",
            subject: "bio",
            journal: "Nature Biotechnology",
            citations: 203,
            access: "open",
            tags: ["Biology", "Open Access"],
            description: "This study presents novel methods for improving CRISPR-Cas9 efficiency and specificity in human stem cells, with implications for treating genetic disorders through targeted gene editing."
        },
        {
            id: 4,
            title: "The Impact of Digital Media Consumption on Adolescent Cognitive Development: A Longitudinal Study",
            authors: "Thompson, J., Rodriguez, C., Kim, S., & Anderson, P.",
            year: 2024,
            type: "journal",
            subject: "psych",
            journal: "Journal of Developmental Psychology",
            citations: 142,
            access: "journal",
            tags: ["Psychology", "Journal"],
            description: "This 5-year longitudinal study examines how different patterns of digital media consumption affect cognitive development, attention, and social-emotional skills in adolescents aged 12-17."
        },
        {
            id: 5,
            title: "Quantum-Inspired Algorithms for Graph Neural Networks",
            authors: "Lee, J., Gupta, R., Zhao, Y., & Miller, T.",
            year: 2025,
            type: "preprint",
            subject: "cs",
            journal: "arXiv",
            citations: 87,
            access: "preprint",
            tags: ["Computer Science", "Preprint"],
            description: "This paper proposes novel quantum-inspired classical algorithms that significantly improve the computational efficiency of graph neural networks for large-scale graph learning tasks."
        },
        {
            id: 6,
            title: "Deep Learning for Healthcare: Opportunities and Challenges",
            authors: "Smith, J., Doe, A., & Johnson, L.",
            year: 2024,
            type: "journal",
            subject: "bio",
            journal: "Journal of Medical Internet Research",
            citations: 120,
            access: "open",
            tags: ["Biology", "Open Access"],
            description: "This paper explores the potential of deep learning in healthcare, discussing both the opportunities and challenges in implementing these technologies in clinical settings."
        },
        {
            id: 7,
            title: "Advancements in Quantum Computing: A Review",
            authors: "Brown, C., White, D., & Green, E.",
            year: 2023,
            type: "conference",
            subject: "cs",
            journal: "Quantum Computing Conference 2023",
            citations: 95,
            access: "conference",
            tags: ["Computer Science", "Conference"],
            description: "A comprehensive review of recent advancements in quantum computing, highlighting key breakthroughs and future directions in the field."
        },
        {
            id: 8,
            title: "Neural Network Approaches for Climate Change Prediction",
            authors: "Park, S., Ramirez, J., & Chen, H.",
            year: 2024,
            type: "article",
            subject: "env",
            journal: "Environmental Science & Technology",
            citations: 175,
            access: "journal",
            tags: ["Environmental Science", "Journal"],
            description: "This paper evaluates various neural network architectures for predicting climate patterns, comparing their accuracy against traditional forecasting methods across diverse geographical regions."
        },
        {
            id: 9,
            title: "Blockchain Applications in Supply Chain Management",
            authors: "Wilson, T., Davis, M., & Martinez, E.",
            year: 2023,
            type: "article",
            subject: "cs",
            journal: "Journal of Business Logistics",
            citations: 89,
            access: "open",
            tags: ["Computer Science", "Open Access"],
            description: "An analysis of blockchain implementation in global supply chains, examining improved transparency, traceability, and security across multiple industry case studies."
        },
        {
            id: 10,
            title: "Ethical Considerations in Autonomous Vehicle Decision-Making",
            authors: "Kumar, A., O'Brien, S., & Li, Q.",
            year: 2025,
            type: "conference",
            subject: "ethics",
            journal: "IEEE International Conference on Autonomous Systems",
            citations: 112,
            access: "conference",
            tags: ["Ethics", "Conference"],
            description: "This paper addresses the ethical frameworks governing decision-making algorithms in autonomous vehicles, particularly in unavoidable accident scenarios."
        },
        {
            id: 11,
            title: "Genetically Modified Crops and Food Security: A Global Analysis",
            authors: "Rodriguez, M., Patel, K., & Singh, A.",
            year: 2022,
            type: "article",
            subject: "bio",
            journal: "Nature Food",
            citations: 234,
            access: "journal",
            tags: ["Biology", "Journal"],
            description: "A comprehensive analysis of GM crop adoption worldwide and its correlations with food security metrics, agricultural sustainability, and economic outcomes for farmers."
        },
        {
            id: 12,
            title: "Microplastics in Marine Ecosystems: Detection and Impact Assessment",
            authors: "Chen, Y., Schmidt, H., & Nakamura, T.",
            year: 2023,
            type: "article",
            subject: "env",
            journal: "Marine Pollution Bulletin",
            citations: 167,
            access: "open",
            tags: ["Environmental Science", "Open Access"],
            description: "Novel methodologies for detecting microplastics in marine environments and an assessment of their ecological impacts across trophic levels."
        },
        {
            id: 13,
            title: "Attention Mechanisms in Natural Language Processing",
            authors: "Sharma, P., Miller, J., & Wu, X.",
            year: 2022,
            type: "conference",
            subject: "cs",
            journal: "Proceedings of ACL 2022",
            citations: 321,
            access: "conference",
            tags: ["Computer Science", "Conference"],
            description: "A detailed examination of various attention mechanisms in NLP models, evaluating their effectiveness across different language understanding and generation tasks."
        },
        {
            id: 14,
            title: "Social Media and Political Polarization: Causal Relationships",
            authors: "Roberts, E., Johnson, T., & Alvarez, C.",
            year: 2024,
            type: "journal",
            subject: "psych",
            journal: "Journal of Communication",
            citations: 128,
            access: "journal",
            tags: ["Psychology", "Journal"],
            description: "This research explores causal mechanisms through which social media algorithms and user behavior contribute to political polarization across different demographic groups."
        },
        {
            id: 15,
            title: "Optimizing Energy Consumption in Smart Cities through AI",
            authors: "Wang, L., Garcia, P., & Brown, S.",
            year: 2025,
            type: "article",
            subject: "env",
            journal: "Sustainable Cities and Society",
            citations: 97,
            access: "open",
            tags: ["Environmental Science", "Open Access"],
            description: "A framework for integrating AI systems with urban infrastructure to optimize energy usage in transportation, buildings, and utilities while maintaining service quality."
        },
        {
            id: 16,
            title: "Biomarkers for Early Alzheimer's Detection: A Meta-Analysis",
            authors: "Kang, H., Peterson, M., & Santos, J.",
            year: 2023,
            type: "article",
            subject: "bio",
            journal: "The Lancet Neurology",
            citations: 289,
            access: "journal",
            tags: ["Biology", "Journal"],
            description: "This meta-analysis evaluates the sensitivity and specificity of various biomarkers for early-stage Alzheimer's disease detection across multiple longitudinal studies."
        },
        {
            id: 17,
            title: "Reinforcement Learning for Robotics Control: Recent Advances",
            authors: "Lee, S., Patel, V., & Anderson, K.",
            year: 2024,
            type: "preprint",
            subject: "cs",
            journal: "arXiv",
            citations: 78,
            access: "preprint",
            tags: ["Computer Science", "Preprint"],
            description: "A survey of recent reinforcement learning algorithms applied to robotic control systems, with emphasis on sample efficiency and transfer learning capabilities."
        },
        {
            id: 18,
            title: "Mindfulness-Based Interventions for Chronic Pain Management",
            authors: "Williams, D., Chen, M., & Gonzalez, R.",
            year: 2022,
            type: "journal",
            subject: "psych",
            journal: "Clinical Psychology Review",
            citations: 154,
            access: "open",
            tags: ["Psychology", "Open Access"],
            description: "This systematic review analyzes the efficacy of mindfulness practices for chronic pain management across various pain conditions and patient populations."
        },
        {
            id: 19,
            title: "Zero-Shot Learning in Computer Vision: A Survey",
            authors: "Kim, J., Patel, N., & Wong, A.",
            year: 2025,
            type: "conference",
            subject: "cs",
            journal: "IEEE Conference on Computer Vision and Pattern Recognition",
            citations: 143,
            access: "conference",
            tags: ["Computer Science", "Conference"],
            description: "A comprehensive survey of zero-shot learning methods in computer vision tasks, categorizing approaches and benchmarking performance across standard datasets."
        },
        {
            id: 20,
            title: "Circular Economy Principles in Manufacturing: Case Studies",
            authors: "Muller, H., Jackson, T., & Yamamoto, K.",
            year: 2023,
            type: "article",
            subject: "env",
            journal: "Journal of Cleaner Production",
            citations: 112,
            access: "journal",
            tags: ["Environmental Science", "Journal"],
            description: "This paper presents case studies of successful circular economy implementation in manufacturing sectors, analyzing economic and environmental outcomes."
        },
        {
            id: 21,
            title: "Human-AI Collaboration in Creative Tasks",
            authors: "Zhang, W., O'Connor, B., & Lee, M.",
            year: 2024,
            type: "conference",
            subject: "cs",
            journal: "CHI Conference on Human Factors in Computing Systems",
            citations: 86,
            access: "conference",
            tags: ["Computer Science", "Conference"],
            description: "An exploration of collaborative interfaces between humans and AI systems for creative tasks such as design, music composition, and storytelling."
        },
        {
            id: 22,
            title: "Forest Carbon Sequestration Potential Under Climate Change Scenarios",
            authors: "Patel, R., Schneider, J., & Lopez, M.",
            year: 2025,
            type: "article",
            subject: "env",
            journal: "Global Change Biology",
            citations: 92,
            access: "open",
            tags: ["Environmental Science", "Open Access"],
            description: "Models predicting forest carbon sequestration capacity under various climate change scenarios, with implications for carbon offset policies and conservation strategies."
        },
        {
            id: 23,
            title: "The Neuroscience of Decision-Making Under Uncertainty",
            authors: "Tan, L., Miller, S., & Cohen, J.",
            year: 2022,
            type: "journal",
            subject: "psych",
            journal: "Nature Neuroscience",
            citations: 213,
            access: "journal",
            tags: ["Psychology", "Journal"],
            description: "This study uses fMRI data to map neural correlates of decision-making processes under various types of uncertainty, with implications for economic and clinical applications."
        },
        {
            id: 24,
            title: "Federated Learning for Healthcare: Privacy-Preserving Analytics",
            authors: "Gupta, S., Williams, T., & Chen, L.",
            year: 2023,
            type: "article",
            subject: "cs",
            journal: "BMC Medical Informatics and Decision Making",
            citations: 176,
            access: "open",
            tags: ["Computer Science", "Open Access"],
            description: "A framework for implementing federated learning in healthcare systems that maintains data privacy while enabling collaborative model training across institutions."
        },
        {
            id: 25,
            title: "Ethical Guidelines for AI in Educational Settings",
            authors: "Johnson, K., Singh, P., & Martinez, L.",
            year: 2024,
            type: "conference",
            subject: "ethics",
            journal: "International Conference on AI in Education",
            citations: 79,
            access: "conference",
            tags: ["Ethics", "Conference"],
            description: "Proposed ethical frameworks for developing and deploying AI systems in educational environments, addressing issues of bias, transparency, and student data privacy."
        }
    ];

    // --- State ---
    let activeTab = 'recent'; // 'recent', 'cited', 'saved'
    let filters = {
        subject: new Set(['all']), // "all" selected by default
        year: 'all',
        type: new Set(['article', 'conference', 'journal', 'preprint']),
        access: new Set(['open']),
    };
    let searchQuery = '';
    let sortBy = 'date-desc'; // 'date-desc', 'date-asc', 'citations-desc', 'title-asc'
    let savedPapers = new Set();
    let currentPage = 1;
    const pageSize = 5;

    // --- DOM Elements ---
    const tabBtns = document.querySelectorAll('#papers .border-b-2, #papers .hover\\:text-gray-700');
    const paperList = document.querySelector('#papers .flex-grow.p-4 .space-y-4');
    const filterSidebar = document.querySelector('#papers .md\\:w-64');
    const searchInput = document.querySelector('#papers input[type="text"][placeholder="Search papers..."]');
    const sortSelect = document.querySelector('#papers select');
    const pagination = document.querySelector('#papers .mt-6.flex.justify-between.items-center .flex.space-x-1');

  // --- Helper Functions ---
    function getFilteredPapers() {
        let result = papers.slice();

        // Filter by tab
        if (activeTab === 'saved') {
            result = result.filter(p => savedPapers.has(p.id));
        } else if (activeTab === 'cited') {
            sortBy = 'citations-desc';
        }

        // Filter by subject
        if (!filters.subject.has('all') && filters.subject.size > 0) {
            result = result.filter(p => filters.subject.has(p.subject));
        }

        // Filter by year
        if (filters.year !== 'all') {
            if (filters.year === 'older') {
                result = result.filter(p => p.year <= 2022);
            } else {
                result = result.filter(p => p.year == filters.year);
            }
        }

        // Filter by type
        if (filters.type.size > 0) {
            result = result.filter(p => filters.type.has(p.type));
        }

        // Filter by access
        if (filters.access.size > 0) {
            result = result.filter(p => filters.access.has(p.access));
        }

        // Search
        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.authors.toLowerCase().includes(q) ||
                p.journal.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tags.some(tag => tag.toLowerCase().includes(q))
            );
        }

        // Sort
        if (sortBy === 'date-desc') {
            result.sort((a, b) => b.year - a.year);
        } else if (sortBy === 'date-asc') {
            result.sort((a, b) => a.year - b.year);
        } else if (sortBy === 'citations-desc') {
            result.sort((a, b) => b.citations - a.citations);
        } else if (sortBy === 'title-asc') {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        return result;
    }
    function renderPapers() {
        const filtered = getFilteredPapers();
        const total = filtered.length;
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        currentPage = Math.min(currentPage, totalPages);

        // Pagination
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pagePapers = filtered.slice(start, end);

        // Render papers
        paperList.innerHTML = '';
        if (pagePapers.length === 0) {
            paperList.innerHTML = `<div class="text-gray-500 text-center py-8">No papers found. Try adjusting your filters.</div>`;
        } else {
            for (const p of pagePapers) {
                const accessBadge = p.access === 'open' 
                    ? '<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Open Access</span>' 
                    : p.access === 'preprint' 
                        ? '<span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Preprint</span>'
                        : '<span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Subscription</span>';
                
                paperList.innerHTML += `
                <div class="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition-shadow">
                    <div class="flex justify-between">
                        <div class="flex flex-wrap gap-2">
                            ${accessBadge}
                            ${p.tags.map(tag => `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag}</span>`).join('')}
                        </div>
                        <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary bookmark-btn" data-id="${p.id}">
                            <i class="${savedPapers.has(p.id) ? 'ri-bookmark-fill text-primary' : 'ri-bookmark-line'}"></i>
                        </button>
                    </div>
                    <h3 class="text-lg font-semibold mt-2 mb-1">${p.title}</h3>
                    <p class="text-sm text-gray-500 mb-2">${p.authors} (${p.year})</p>
                    <p class="text-gray-700 text-sm mb-3 line-clamp-2">${p.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="w-5 h-5 flex items-center justify-center text-gray-500 mr-1">
                                <i class="ri-file-list-line"></i>
                            </div>
                            <span class="text-xs text-gray-500">${p.journal}</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-5 h-5 flex items-center justify-center text-gray-500 mr-1">
                                <i class="ri-double-quotes-l"></i>
                            </div>
                            <span class="text-xs text-gray-500">Citations: ${p.citations}</span>
                        </div>
                    </div>
                </div>
                `;
            }
        }

        // Render pagination
        if (pagination) {
            pagination.innerHTML = '';
            if (totalPages > 1) {
                // Prev
                pagination.innerHTML += `<button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 page-btn" data-page="${Math.max(1, currentPage - 1)}"><i class="ri-arrow-left-s-line"></i></button>`;
                
                // Page numbers (with ellipsis for many pages)
                const maxVisiblePages = 5;
                let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
                
                if (endPage - startPage < maxVisiblePages - 1) {
                    startPage = Math.max(1, endPage - maxVisiblePages + 1);
                }
                
                // First page
                if (startPage > 1) {
                    pagination.innerHTML += `<button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 page-btn" data-page="1">1</button>`;
                    if (startPage > 2) {
                        pagination.innerHTML += `<span class="text-gray-500 px-2">...</span>`;
                    }
                }
                
                // Page numbers
                for (let i = startPage; i <= endPage; i++) {
                    pagination.innerHTML += `<button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 ${i === currentPage ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'} page-btn" data-page="${i}">${i}</button>`;
                }
                
                // Last page
                if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                        pagination.innerHTML += `<span class="text-gray-500 px-2">...</span>`;
                    }
                    pagination.innerHTML += `<button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 page-btn" data-page="${totalPages}">${totalPages}</button>`;
                }
                
                // Next
                pagination.innerHTML += `<button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 page-btn" data-page="${Math.min(totalPages, currentPage + 1)}"><i class="ri-arrow-right-s-line"></i></button>`;
            }
        }

        // Update count
        const countDiv = document.querySelector('#papers .mt-6.flex.justify-between.items-center .text-sm.text-gray-500');
        if (countDiv) {
            countDiv.textContent = `Showing ${start + 1}-${Math.min(total, end)} of ${total} papers`;
        }

        // Bookmark event
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = Number(btn.dataset.id);
                if (savedPapers.has(id)) {
                    savedPapers.delete(id);
                    // Update icon
                    btn.querySelector('i').className = 'ri-bookmark-line';
                } else {
                    savedPapers.add(id);
                    // Update icon
                    btn.querySelector('i').className = 'ri-bookmark-fill text-primary';
                }
                
                // Re-render if on saved tab
                if (activeTab === 'saved') {
                    renderPapers();
                }
            });
        });

        // Pagination event
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const page = Number(btn.dataset.page);
                if (!isNaN(page)) {
                    currentPage = page;
                    renderPapers();
                    // Scroll to top of paper list
                    paperList.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // --- Tab Switching ---
    tabBtns.forEach((btn, idx) => {
        btn.addEventListener('click', function () {
            tabBtns.forEach(b => {
                b.classList.remove('text-primary', 'border-b-2', 'border-primary');
                b.classList.add('hover:text-gray-700', 'text-gray-500');
            });
            btn.classList.add('text-primary', 'border-b-2', 'border-primary');
            btn.classList.remove('hover:text-gray-700', 'text-gray-500');
            
            activeTab = idx === 0 ? 'recent' : idx === 1 ? 'cited' : 'saved';
            
            // Change sort for tabs
            if (activeTab === 'cited') {
                sortBy = 'citations-desc';
                if (sortSelect) {
                    sortSelect.value = "Most Citations";
                }
            } else if (activeTab === 'recent') {
                sortBy = 'date-desc';
                if (sortSelect) {
                    sortSelect.value = "Newest First";
                }
            }
            
            currentPage = 1;
            renderPapers();
        });
    });

    // --- Filter Sidebar ---
    // Subject
    filterSidebar.querySelectorAll('[id^="subject-"]').forEach(cb => {
        cb.addEventListener('click', function () {
            const id = cb.id.replace('subject-', '');
            if (id === 'all') {
                // If "all" is clicked, select only "all"
                filters.subject = new Set(['all']);
                // Update UI
                filterSidebar.querySelectorAll('[id^="subject-"]').forEach(box => {
                    if (box.id === 'subject-all') box.classList.add('checked');
                    else box.classList.remove('checked');
                });
            } else {
                // Toggle subject
                if (filters.subject.has('all')) {
                    filters.subject = new Set();
                    filterSidebar.querySelector('#subject-all').classList.remove('checked');
                }
                if (cb.classList.contains('checked')) {
                    cb.classList.remove('checked');
                    filters.subject.delete(id);
                } else {
                    cb.classList.add('checked');
                    filters.subject.add(id);
                }
                // If none selected, revert to "all"
                if (filters.subject.size === 0) {
                    filters.subject = new Set(['all']);
                    filterSidebar.querySelector('#subject-all').classList.add('checked');
                }
            }
            currentPage = 1;
            renderPapers();
        });
    });
    
    // Year
    filterSidebar.querySelectorAll('[id^="year-"]').forEach(rb => {
        rb.addEventListener('click', function () {
            filterSidebar.querySelectorAll('[id^="year-"]').forEach(r => r.classList.remove('checked'));
            rb.classList.add('checked');
            const id = rb.id.replace('year-', '');
            filters.year = id;
            currentPage = 1;
            renderPapers();
        });
    });
    
    // Type
    filterSidebar.querySelectorAll('[id^="type-"]').forEach(cb => {
        cb.addEventListener('click', function () {
            const id = cb.id.replace('type-', '');
            if (cb.classList.contains('checked')) {
                cb.classList.remove('checked');
                filters.type.delete(id);
            } else {
                cb.classList.add('checked');
                filters.type.add(id);
            }
            // Ensure at least one type is selected
            if (filters.type.size === 0) {
                cb.classList.add('checked');
                filters.type.add(id);
            }
            currentPage = 1;
            renderPapers();
        });
    });
    
    // Access
    filterSidebar.querySelectorAll('[id^="access-"]').forEach(cb => {
        cb.addEventListener('click', function () {
            const id = cb.id.replace('access-', '');
            if (cb.classList.contains('checked')) {
                cb.classList.remove('checked');
                filters.access.delete(id);
            } else {
                cb.classList.add('checked');
                filters.access.add(id);
            }

            // Update access filter logic
            if (filters.access.has('open')) {
                filters.access = new Set(['open']);
            } else {
                filters.access = new Set(['subscription']);
            }

            currentPage = 1;
            renderPapers();
        });
    });

    
    // Reset Filters
    const resetBtn = filterSidebar.querySelector('button');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            // Reset all filters to default
            filters.subject = new Set(['all']);
            filters.year = 'all';
            filters.type = new Set(['article', 'conference', 'journal', 'preprint']);
            filters.access = new Set(['open']);
            
            // Reset UI
            // Subject checkboxes
            filterSidebar.querySelectorAll('[id^="subject-"]').forEach(cb => {
                if (cb.id === 'subject-all') {
                    cb.classList.add('checked');
                } else {
                    cb.classList.remove('checked');
                }
            });
            
            // Year radio buttons
            filterSidebar.querySelectorAll('[id^="year-"]').forEach(rb => {
                if (rb.id === 'year-all') {
                    rb.classList.add('checked');
                } else {
                    rb.classList.remove('checked');
                }
            });
            
            // Type checkboxes
            filterSidebar.querySelectorAll('[id^="type-"]').forEach(cb => {
                cb.classList.add('checked');
                filters.type.add(cb.id.replace('type-', ''));
            });
            
            // Access checkboxes
            filterSidebar.querySelectorAll('[id^="access-"]').forEach(cb => {
                if (cb.id === 'access-open') {
                    cb.classList.add('checked');
                } else {
                    cb.classList.remove('checked');
                }
            });
            
            currentPage = 1;
            renderPapers();
        });
    }

    // --- Search ---
    if (searchInput) {
        // Add clear search button functionality
        const searchWrapper = searchInput.parentElement;
        const clearBtn = document.createElement('button');
        clearBtn.className = 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600';
        clearBtn.innerHTML = '<i class="ri-close-line"></i>';
        clearBtn.style.display = 'none';
        searchWrapper.style.position = 'relative';
        searchWrapper.appendChild(clearBtn);
        
        searchInput.addEventListener('input', function() {
            searchQuery = searchInput.value;
            clearBtn.style.display = searchQuery ? 'block' : 'none';
            currentPage = 1;
            renderPapers();
        });
        
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            searchQuery = '';
            clearBtn.style.display = 'none';
            currentPage = 1;
            renderPapers();
        });
        
        // Add keypress event for search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value;
                currentPage = 1;
                renderPapers();
            }
        });
    }

    // --- Sort ---
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const val = sortSelect.value;
            if (val.includes('Newest')) sortBy = 'date-desc';
            else if (val.includes('Oldest')) sortBy = 'date-asc';
            else if (val.includes('Citations')) sortBy = 'citations-desc';
            else if (val.includes('Title')) sortBy = 'title-asc';
            currentPage = 1;
            renderPapers();
        });
    }
    

    
    // --- Paper Details Modal ---
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'paper-modal';
    modalContainer.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden';
    document.body.appendChild(modalContainer);
    
    modalContainer.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold modal-title">Paper Title</h2>
                <button class="text-gray-500 hover:text-gray-700" id="close-modal">
                    <i class="ri-close-line text-2xl"></i>
                </button>
            </div>
            <div id="modal-content" class="space-y-4">
                <!-- Modal content will be inserted here -->
            </div>
            <div class="mt-6 flex justify-end">
                <button class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark" id="close-modal-btn">Close</button>
            </div>
        </div>
    `;
    
    // Close modal functionality
    document.getElementById('close-modal').addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });
    
    // Close when clicking outside the modal
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.add('hidden');
        }
    });
    
    // Open paper details modal when clicking on paper
    function setupPaperClickEvents() {
        const paperItems = document.querySelectorAll('#papers .bg-white.border');
        paperItems.forEach(item => {
            // Don't attach to the bookmark button
            const titleElement = item.querySelector('h3');
            if (titleElement) {
                titleElement.style.cursor = 'pointer';
                titleElement.addEventListener('click', function() {
                    const title = this.textContent;
                    const paper = papers.find(p => p.title === title);
                    
                    if (paper) {
                        // Update modal content
                        document.querySelector('.modal-title').textContent = paper.title;
                        
                        const modalContent = document.getElementById('modal-content');
                        modalContent.innerHTML = `
                            <div class="flex flex-wrap gap-2 mb-3">
                                ${paper.tags.map(tag => `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">${tag}</span>`).join('')}
                                ${paper.access === 'open' 
                                    ? '<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Open Access</span>' 
                                    : paper.access === 'preprint' 
                                        ? '<span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Preprint</span>'
                                        : '<span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Subscription</span>'
                                }
                            </div>
                            <div class="mb-4">
                                <p class="text-gray-700"><strong>Authors:</strong> ${paper.authors}</p>
                                <p class="text-gray-700"><strong>Year:</strong> ${paper.year}</p>
                                <p class="text-gray-700"><strong>Journal/Conference:</strong> ${paper.journal}</p>
                                <p class="text-gray-700"><strong>Citations:</strong> ${paper.citations}</p>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold mb-2">Abstract</h4>
                                <p class="text-gray-700">${paper.description}</p>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold mb-2">Keywords</h4>
                                <p class="text-gray-700">Machine Learning, ${paper.tags.join(', ')}, Research</p>
                            </div>
                            <div class="p-4 bg-gray-50 rounded">
                                <h4 class="font-semibold mb-2">How to cite</h4>
                                <p class="text-sm font-mono bg-gray-100 p-3 rounded">
                                    ${paper.authors} (${paper.year}). ${paper.title}. <em>${paper.journal}</em>.
                                </p>
                                <button class="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300" id="copy-citation">
                                    <i class="ri-file-copy-line mr-1"></i> Copy citation
                                </button>
                            </div>
                        `;
                        
                        // Show modal
                        modalContainer.classList.remove('hidden');
                        
                        // Copy citation functionality
                        document.getElementById('copy-citation').addEventListener('click', function() {
                            const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}.`;
                            navigator.clipboard.writeText(citation).then(() => {
                                this.textContent = 'Copied!';
                                setTimeout(() => {
                                    this.innerHTML = '<i class="ri-file-copy-line mr-1"></i> Copy citation';
                                }, 2000);
                            });
                        });
                    }
                });
            }
        });
    }

    // --- Initial Render ---
    renderPapers();
    
    // Setup click events after initial render
    setupPaperClickEvents();
    
    // Update click events after each paper list render
    const originalRenderPapers = renderPapers;
    renderPapers = function() {
        originalRenderPapers();
        setupPaperClickEvents();
    };
});

// JavaScript to make the custom filter components interactive
document.addEventListener('DOMContentLoaded', function() {
    // Handle custom checkboxes
    document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
      checkbox.addEventListener('click', function() {
        // Toggle the checked state
        this.classList.toggle('checked');
        
        // If this is the "All" checkbox in subjects, handle accordingly
        if (this.id === 'subject-all' && this.classList.contains('checked')) {
          // Uncheck all other subject checkboxes
          document.querySelectorAll('.custom-checkbox[id^="subject-"]:not(#subject-all)').forEach(subjectCheckbox => {
            subjectCheckbox.classList.remove('checked');
          });
        }
        
        // If any subject checkbox other than "All" is checked, uncheck the "All" checkbox
        if (this.id.startsWith('subject-') && this.id !== 'subject-all' && this.classList.contains('checked')) {
          document.getElementById('subject-all').classList.remove('checked');
        }
      });
    });
    
    // Handle custom radio buttons
    document.querySelectorAll('.custom-radio').forEach(radio => {
      radio.addEventListener('click', function() {
        // Get the group name from id prefix (e.g., "year" from "year-all")
        const groupName = this.id.split('-')[0];
        
        // Uncheck all radio buttons in the same group
        document.querySelectorAll(`.custom-radio[id^="${groupName}-"]`).forEach(groupRadio => {
          groupRadio.classList.remove('checked');
        });
        
        // Check this radio button
        this.classList.add('checked');
      });
    });
    
    // Handle custom switches
    document.querySelectorAll('.custom-switch').forEach(switchEl => {
      switchEl.addEventListener('click', function() {
        this.classList.toggle('checked');
      });
    });
    
    // Handle Reset Filters button
    document.querySelector('button').addEventListener('click', function() {
      // Reset Subject filters - check only "All"
      document.querySelectorAll('.custom-checkbox[id^="subject-"]').forEach(checkbox => {
        checkbox.classList.remove('checked');
      });
      document.getElementById('subject-all').classList.add('checked');
      
      // Reset Year filters - check only "All Years"
      document.querySelectorAll('.custom-radio[id^="year-"]').forEach(radio => {
        radio.classList.remove('checked');
      });
      document.getElementById('year-all').classList.add('checked');
      
      // Reset Type filters - check default options
      document.querySelectorAll('.custom-checkbox[id^="type-"]').forEach(checkbox => {
        checkbox.classList.remove('checked');
      });
      document.getElementById('type-article').classList.add('checked');
      document.getElementById('type-conference').classList.add('checked');
      
      // Reset Access filter
      document.getElementById('access-open').classList.add('checked');
    });
  });

   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });



document.addEventListener('DOMContentLoaded', function () {
    // Ensure the page loads at the top
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

