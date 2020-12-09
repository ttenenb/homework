import list from './names.json';
export default function () {
    const allnames = [];

    for (let i = 0; i < list.length; i++) {
        allnames.push({ first: list[i].val1, last: list[i].val0 });
      
    }
    return allnames.sort((a,b)=> a.last > b.last?1:a.last<b.last?-1:0 );
}