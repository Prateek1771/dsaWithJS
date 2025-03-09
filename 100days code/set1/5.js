// fodify it, refine it, and make it better

function fetchRole(roleID) {
    // switch(roleID){
    //     case 1: return "admin";
    //     case 2: return "moderator";
    //     case 3: return "SpecialUser";
    //     default: return "user"
    // }

    const roleObj = {
        1: "admin",
        2: "moderator",
        3: "SpecialUser"
    }
    return roleObj[roleID] || "user";
}

console.log(fetchRole(1));
console.log(fetchRole(2));
console.log(fetchRole(3));
console.log(fetchRole(4));
