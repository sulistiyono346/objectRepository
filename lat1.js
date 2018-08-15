var Obj={
  nama:"sulistiyono",
  ip:[3.10,3.25,3.60,3.90],
  ipk:
      function() {
      var total=0;
      var ips=this.ip
        for (var i = 0; i < ips.length; i++) {
        total+=ips[i]
    }
    return total/ips.length
  }

}
console.log(Obj);
