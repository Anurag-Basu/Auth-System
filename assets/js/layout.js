if (sm) {
    new Noty({
        theme: "nest",
        text: sm,
        type:"success",
        layout:"topRight",
        timeout:1500
    }).show();
}

if (em) {
    new Noty({
        theme: "nest",
        text: em,
        type:"error",
        layout:"topRight",
        timeout:1500
    }).show();
}