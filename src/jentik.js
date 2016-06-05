/*****************************************************************************
* #### jentikjs ####
* jQuery plugin untuk membuat widget mengecek ongkir atau tracking TIKI & JNE
* Coded by Ican Bachors 2016.
* http://ibacor.com/labs/jentikjs
* Updates will be posted to this site.
*****************************************************************************/

var jentik = function() {
    $('#jentik').html('<div class="tabs"><div class="tab1 aktip1">ongkir</div><div class="tab1">tracking</div></div><div class="tabs"><div class="tab2 aktip2">jne</div><div class="tab2">tiki</div><div class="tab2">pos</div></div><span id="jentik-anu" style="display:none">ongkir</span><div class="kotak"><div id="kotak-ongkir"><div id="kotak-ongkir-tiki" style="display:none" title="Cek Ongkir TIKI"><span class="title">Kota Asal</span><input type="text" id="tiki_dari" list="rute_tiki_dari" placeholder="Bandung"/><datalist id="rute_tiki_dari"></datalist><span class="title">Kota Tujuan</span><input type="text" id="tiki_ke" list="rute_tiki_ke" placeholder="Surabaya"/><datalist id="rute_tiki_ke"></datalist><span class="title">Berat (Kg)</span><input type="text" id="tiki_kg" placeholder="4"/><input type="submit" class="cek_ongkir" data-jentik="tiki" value="Cek Ongkir"/></div><div id="kotak-ongkir-jne" title="Cek Ongkir JNE"><span class="title">Kota Asal</span><input type="text" id="jne_dari" list="rute_jne_dari" placeholder="Bandung"/><datalist id="rute_jne_dari"></datalist><span class="title">Kota Tujuan</span><input type="text" id="jne_ke" list="rute_jne_ke" placeholder="Surabaya"/><datalist id="rute_jne_ke"></datalist><span class="title">Berat (Kg)</span><input type="text" id="jne_kg" placeholder="4"/><input type="submit" class="cek_ongkir" data-jentik="jne" value="Cek Ongkir"/></div><div id="kotak-ongkir-pos" style="display:none" title="Cek Ongkir POS Indonesia"><span class="title">Kota Asal</span><input type="text" id="pos_dari" list="rute_pos_dari" placeholder="Bandung"/><datalist id="rute_pos_dari"></datalist><span class="title">Kota Tujuan</span><input type="text" id="pos_ke" list="rute_pos_ke" placeholder="Surabaya"/><datalist id="rute_pos_ke"></datalist><span class="title">Berat (Kg)</span><input type="text" id="pos_kg" placeholder="4"/><input type="submit" class="cek_ongkir" data-jentik="pos" value="Cek Ongkir"/></div></div><div id="kotak-tracking"><div id="kotak-tracking-tiki" style="display:none" title="Cek Tracking TIKI"><span class="title">Nomor Resi</span><input type="text" id="tiki_resi" placeholder="xxx"/><input type="submit" class="cek_resi" data-jentik="tiki" value="Cek Resi"/></div><div id="kotak-tracking-jne" style="display:none" title="Cek Tracking JNE"><span class="title">Nomor Resi</span><input type="text" id="jne_resi" placeholder="xxx"/><input type="submit" class="cek_resi" data-jentik="jne" value="Cek Resi"/></div><div id="kotak-tracking-pos" style="display:none" title="Cek Tracking POS Indonesia"><span class="title">Nomor Resi</span><input type="text" id="pos_resi" placeholder="xxx"/><input type="submit" class="cek_resi" data-jentik="pos" value="Cek Resi"/></div></div></div><div id="jentik-output"></div><div id="footer"><a href="https://github.com/bachors/JentikJS" class="jgf" target="_blank">Made with<3</a></div>');
    $('body').on('click', '#jentik .tab1', function() {
        var a = $(this).html(),
            tab2 = $('#jentik .aktip2').html();
        $('#jentik-anu').html(a);
        $('#jentik .tab1').removeClass('aktip1');
        if (a == 'ongkir') {
            $('#jentik #kotak-tracking').css('display', 'none');
            $('#jentik #kotak-ongkir').css('display', 'block');
            $('#jentik #kotak-ongkir-jne').css('display', 'none');
            $('#jentik #kotak-ongkir-tiki').css('display', 'none');
            $('#jentik #kotak-ongkir-' + tab2).css('display', 'block')
        } else if (a == 'tracking') {
            $('#jentik #kotak-ongkir').css('display', 'none');
            $('#jentik #kotak-tracking').css('display', 'block');
            $('#jentik #kotak-tracking-jne').css('display', 'none');
            $('#jentik #kotak-tracking-tiki').css('display', 'none');
            $('#jentik #kotak-tracking-' + tab2).css('display', 'block')
        }
        $(this).addClass('aktip1');
        $('#jentik-output').html('');
        return false
    });
    $('body').on('click', '#jentik .tab2', function() {
        var a = $(this).html(),
            anu = $('#jentik-anu').html();
        $('#jentik .tab2').removeClass('aktip2');
        if (a == 'jne') {
            $('#jentik #kotak-' + anu + '-tiki').css('display', 'none');
            $('#jentik #kotak-' + anu + '-pos').css('display', 'none');
            $('#jentik #kotak-' + anu + '-jne').css('display', 'block');
        } else if (a == 'tiki') {
            $('#jentik #kotak-' + anu + '-jne').css('display', 'none');
            $('#jentik #kotak-' + anu + '-pos').css('display', 'none');
            $('#jentik #kotak-' + anu + '-tiki').css('display', 'block');
        } else if (a == 'pos') {
            $('#jentik #kotak-' + anu + '-jne').css('display', 'none');
            $('#jentik #kotak-' + anu + '-tiki').css('display', 'none');
            $('#jentik #kotak-' + anu + '-pos').css('display', 'block');
        }
        $(this).addClass('aktip2');
        $('#jentik-output').html('');
        return false
    });
    $('body').on('focus', '#tiki_dari', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#tiki_dari').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_tiki(d, a)
                }
            }, 50)
        })
    });
    $('body').on('focus', '#tiki_ke', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#tiki_ke').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_tiki(d, a)
                }
            }, 50)
        })
    });
    $('body').on('focus', '#pos_dari', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#pos_dari').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_pos(d, a)
                }
            }, 50)
        })
    });
    $('body').on('focus', '#pos_ke', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#pos_ke').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_pos(d, a)
                }
            }, 50)
        })
    });
    $('body').on('focus', '#jne_dari', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#jne_dari').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_jne(d, 'dari', a)
                }
            }, 50)
        })
    });
    $('body').on('focus', '#jne_ke', function() {
        var a = $(this).attr('list');
        $(this).keydown(function() {
            setTimeout(function() {
                var d = $('#jne_ke').val(),
                    jum = d.length;
                if (jum > 2) {
                    rute_jne(d, 'ke', a)
                }
            }, 50)
        })
    });
    $('body').on('click', '.cek_ongkir', function() {
        $('#jentik-output').html('<p>Wait..</p>');
        var a = $(this).data('jentik'),
            dari = '',
            ke = '',
            berat = '';
			if(a == 'jne'){
				dari = $("#jne_dari").val();
				ke = $("#jne_ke").val();
				berat = $("#jne_kg").val();
			}else if(a == 'tiki'){
				dari = $("#tiki_dari").val();
				ke = $("#tiki_ke").val();
				berat = $("#tiki_kg").val();
			}else if(a == 'pos'){
				dari = $("#pos_dari").val();
				ke = $("#pos_ke").val();
				berat = $("#pos_kg").val();
			}
        cekongkir(a, dari, ke, berat);
        return false
    });
    $('body').on('click', '.cek_resi', function() {
        $('#jentik-output').html('<p>Wait..</p>');
        var a = $(this).data('jentik'),
            resi = '';
			if(a == 'jne'){
				resi = $("#jne_resi").val();
			}else if(a == 'tiki'){
				resi = $("#tiki_resi").val();
			}else if(a == 'pos'){
				resi = $("#pos_resi").val();
			}
        cekresi(a, resi);
        return false
    });

    function rute_tiki(d, e) {
        $.ajax({
            url: 'http://ibacor.com/api/rute-jne-tiki?p=tiki&q=' + d,
            crossDomain: true,
            dataType: 'json'
        }).done(function(b) {
            var c = '';
            $.each(b, function(i, a) {
                c += '<option value="' + b[i] + '">'
            });
            $('#' + e).html(c)
        })
    }

    function rute_pos(d, e) {
        $.ajax({
            url: 'http://ibacor.com/api/rute-jne-tiki?p=pos&q=' + d,
            crossDomain: true,
            dataType: 'json'
        }).done(function(b) {
            var c = '';
            $.each(b, function(i, a) {
                c += '<option value="' + b[i] + '">'
            });
            $('#' + e).html(c)
        })
    }

    function rute_jne(d, t, e) {
        $.ajax({
            url: 'http://ibacor.com/api/rute-jne-tiki?p=jne&q=' + d + '&t=' + t,
            crossDomain: true,
            dataType: 'json'
        }).done(function(b) {
            var c = '';
            $.each(b, function(i, a) {
                c += '<option value="' + b[i] + '">'
            });
            $('#' + e).html(c)
        })
    }

    function cekongkir(f, g, h, j) {
        $.ajax({
            url: 'http://ibacor.com/api/ongkir?service=' + f + '&dari=' + g + '&ke=' + h + '&berat=' + j,
            crossDomain: true,
            dataType: 'json'
        }).done(function(d) {
            var e = '',
				w = '';
            if (d.status == 'success') {
                e += '<p>Ongkir ' + d.service + ' ' + d.dari + ' ke ' + d.ke + ' (' + d.berat + ' kg)</p>';
                e += '<table>';
                if (f == 'tiki') {
					w += 'http://tiki-online.com';
                    e += '<tr><td>LAYANAN</td><td>TARIF</td><td>ETA</td></tr>'
                } else if (f == 'jne') {
					w += 'http://www.jne.co.id';
                    e += '<tr><td>LAYANAN</td><td>KIRIMAN</td><td>TARIF</td><td>ETD</td></tr>'
                } else if (f == 'pos') {
					w += 'http://www.posindonesia.co.id/';
                    e += '<tr><td>LAYANAN</td><td>TARIF</td><td>ETD</td></tr>'
                }
                $.each(d.ongkos, function(i, c) {
                    e += '<tr>';
                    $.each(d.ongkos[i], function(a, b) {
                        e += '<td>' + b + '</td>'
                    });
                    e += '</tr>'
                });
                e += '</table>'
            } else {
                e += d.status + ': ' + d.message
            }
            $('#jentik-output').html('<div id="jentik-result">' + e + '<p>' + w + '</p></div>')
        })
    }

    function cekresi(g, h) {
        $.ajax({
            url: 'http://ibacor.com/api/cek-resi?pengirim=' + g + '&resi=' + h,
            crossDomain: true,
            dataType: 'json'
        }).done(function(d) {
            var e = '';
            if (d.status == 'success') {
                var namaasal = (d.data.detail.asal.nama == undefined ? '' : d.data.detail.asal.nama);
                e += '<p>Detail</p>';
                e += '<table>';
                e += '<tr><td>Status:</td><td>' + d.data.detail.status + '</td></tr>';
                e += '<tr><td>No Resi:</td><td>' + d.data.detail.no_resi + '</td></tr>';
				if (g == 'pos' || g == 'jne') {
					e += '<tr><td>Service:</td><td>' + d.data.detail.service + '</td></tr>';
				}
				if (g == 'tiki' || g == 'jne') {
					e += '<tr><td>Tanggal:</td><td>' + d.data.detail.tanggal + '</td></tr>';
				}
                e += '<tr><td>Asal:</td><td>' + d.data.detail.asal.alamat + '<br>' + namaasal + '</td></tr>';
				if (g == 'pos' || g == 'jne') {
					var f = (d.data.detail.tujuan.nama == undefined ? '' : d.data.detail.tujuan.nama),
					xx = (d.data.detail.tujuan.alamat == undefined ? '' : d.data.detail.tujuan.alamat);
					e += '<tr><td>Tujuan:</td><td>' + xx + '<br>' + f + '</td></tr>';
				}
                e += '</table>';
                e += '<p>Riwayat</p>';
                e += '<table>';
                if (g == 'tiki') {
					e += '<tr><td>TANGGAL</td><td>STATUS</td><td>LOKASI</td></tr>'
                } else if (g == 'jne') {
					e += '<tr><td>TANGGAL</td><td>LOKASI</td><td>KETERANGAN</td></tr>'
                } else if (g == 'pos') {
					e += '<tr><td>TANGGAL</td><td>STATUS</td><td>LOKASI</td><td>KETERANGAN</td></tr>'
                }
                $.each(d.data.riwayat, function(i, c) {
                    e += '<tr>';
                    $.each(d.data.riwayat[i], function(a, b) {
                        e += '<td>' + b + '</td>'
                    });
                    e += '</tr>'
                });
                e += '</table>';
				e += '<p>' + d.website + '</p>';
            } else {
                e += d.status + ': ' + d.pesan
            }
            $('#jentik-output').html('<div id="jentik-result">' + e + '</div>')
        })
    }
}
