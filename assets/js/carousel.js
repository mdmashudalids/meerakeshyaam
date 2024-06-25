
 $(document).ready(function () {
            var owl1 = $(".owl-carousel-1").owlCarousel({
                loop: true,
                margin: 10,
                nav: false, // Disable default nav buttons
                dots: false,
                startPosition: 0, // Start at the first item
                center: true,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 7
                    }
                }
            });

            var owl2 = $(".owl-carousel-2").owlCarousel({
                loop: true,
                margin: 10,
                nav: false, // Disable default nav buttons
                dots: false,
                startPosition: 0, // Start at the first item
                centre:true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            function syncPosition(event, target) {
                var currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
                currentIndex = currentIndex % event.item.count;
                if (currentIndex < 0) {
                    currentIndex = event.item.count + currentIndex;
                }
                target.trigger('to.owl.carousel', [currentIndex, 300, true]);
            }

            owl1.on('changed.owl.carousel', function(event) {
                syncPosition(event, owl2);
            });

            owl2.on('changed.owl.carousel', function(event) {
                syncPosition(event, owl1);
            });

            $("#customNextBtn").click(function () {
                owl1.trigger('next.owl.carousel');
            });

            $("#customPrevBtn").click(function () {
                owl1.trigger('prev.owl.carousel');
            });
        });