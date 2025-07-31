class BeforeAfter {
    constructor(enteryObject) {

        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-handle');
        var widthChange = 0;

        beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
        }
        before.setAttribute('style', "width: 50%;");
        handle.setAttribute('style', "left: 50%;");

        //touch screen event listener
        beforeAfterContainer.addEventListener("touchstart", (e) => {
            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;

                let startOfDiv = beforeAfterContainer.offsetLeft;

                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 20 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 20) {
                    let newWidth = modifiedCurrentPoint * 100 / containerWidth;

                    before.setAttribute('style', "width:" + newWidth + "%;");
                    afterText.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            });
        });

        // beforeAfterContainer.addEventListener('mousedown', (e) => {
        //     isDragging = true;
        // });



        //mouse move event listener
        beforeAfterContainer.addEventListener('mousemove', (e) => {
            // if (isDragging) {
                let containerWidth = beforeAfterContainer.offsetWidth;
                widthChange = e.offsetX;
                let newWidth = widthChange * 100 / containerWidth;
                if (e.offsetX > 20 && e.offsetX < beforeAfterContainer.offsetWidth - 20) {
                    before.setAttribute('style', "width:" + newWidth + "%;");
                    afterText.setAttribute('style', "z-index:" + "1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            // }
        })

        // beforeAfterContainer.addEventListener('mouseup', (e) => {
        //     isDragging = false;
        // });

    }
}