filterSelection("f-business")
    function filterSelection(c) {
        var x,i;
        x = document.getElementsByClassName("d-none");

        for (i = 0; i < x.length; i++){
            w3RemoveClass(x[i], "d-block");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "d-block");
        }
    }

    function w3AddClass(element, name){
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++){
            if(arr1.indexOf(arr2[i]) == -1){
                element.className += " " + arr2[i];
            }
        }
    }

    function w3RemoveClass(element, name){
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++){
            while (arr1.indexOf(arr2[i]) > -1){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    var btnContainer = document.getElementById("btn-filter-container");
    var btns = btnContainer.getElementsByClassName("btn-filter");
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("font-weight-bold border-bottom border-dark");
            current[0].className = current[0].className.replace(" font-weight-bold border-bottom border-dark", "");
            this.className += " font-weight-bold border-bottom border-dark";
        });
    }