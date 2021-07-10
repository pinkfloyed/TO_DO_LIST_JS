const name=document.querySelector('#name');
const links=document.querySelector('#links');
const onlinejudge=document.querySelector('#judge');
const date=document.querySelector('#date');
const linklist=document.querySelector('#link-list');
const btn=document.querySelector('.btn');
btn.addEventListener('click',function(x)
{
    x.preventDefault();

    if(links.value!='' || judge.value!='' || date.value!='')
    {
        const a=document.createElement('tr');

        const p=document.createElement('th');
        p.innerHTML=name.value;
        a.appendChild(p);

        const b=document.createElement('th');
        b.innerHTML=links.value;
        a.appendChild(b);

        const c=document.createElement('th');
        c.innerHTML=onlinejudge.value;
        a.appendChild(c);

        const d=document.createElement('th');
        d.innerHTML=date.value;
        a.appendChild(d);

        linklist.appendChild(a);
    }
    else
    {
        alert('please enter link');
    }

});