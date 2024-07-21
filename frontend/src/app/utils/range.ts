export const range = (max,min=0) => {
    var Ilist=[];

    for(var I=min;I<(max+1);++I){
        Ilist.push(I)
    }

    return Ilist;
}