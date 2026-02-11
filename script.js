 function supprimeDoublons(list) {
   let supprimeDoublons = [];
    for (let i = 0; i < list.length; i++) {
        if (!supprimeDoublons.includes(list[i])) {
            supprimeDoublons.push(list[i]);
        }
    }
    return supprimeDoublons;
}console.log(supprimeDoublons([1, 2, 3, 4, 5,5]))