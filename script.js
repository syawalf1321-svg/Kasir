let total=0;

function tambah(){
    const nama=namaEl.value;
    const harga=Number(hargaEl.value);
    if(!nama || !harga)return;

    const li=document.createElement("li");
    li.innerHTML=`${nama}<span onclick="hapus(${harga},this)">Hapus</span>`;
    List.appendChild(li);

    total += harga;
    hitung();

    namaEl.value=hargaEl.value="";
}

function hapus(h, el){
    total -= h;
    el.parentElement.remove();
    hitung();
}

function hitung(){
    const d=Number(kembali.value)||0;
    const b=Number(bayar.value)||0;
    const t=total - total*d/100;
    totalEl.innerText="Rp"+t;
    kembali.innerText="Rp"+Math.max(0, b - t);
}

const namaEl=nama;
const hargaEl=harga;
const List=document.getElementById("list");
const totalEl=document.getElementById("total");
const kembali=document.getElementById("kembali");