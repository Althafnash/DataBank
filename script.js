window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    
    setTimeout(() => {
        loader.classList.add("loading--hidden");

        loader.addEventListener("transitionend", ()=>{
            document.body.removeChild(loader);
        });
    }, 1500); 

    const tl = gsap.timeline();

    setTimeout(() => {
        tl.from(".folder1", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder1", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder2", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder2", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder3", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder3", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder4", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder4", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder5", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder5", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder6", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder6", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 2000);

    setTimeout(() => {
        tl.from(".folder7", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder7", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 500);

    setTimeout(() => {
        tl.from(".folder8", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder8", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 500);

    setTimeout(() => {
        tl.from(".folder9", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder9", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 500);

    setTimeout(() => {
        tl.from(".folder10", {
            opacity: 0,
            duration: 0.2,
            repeat:0
        })
        .to(".folder10", {
            opacity: 1,
            duration: 0.2,
            repeat:0
        });
    }, 500);
});