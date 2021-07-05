/*
 * platform-display.js
 *
 * Used on /downloads/ to change download display blocks
 * based on detected platform.
 *
 * Pat David, 2016
 * Dan Dennedy, 2019
 */

if ( platform.os.family.indexOf('Win') !== -1 && platform.os.family.indexOf('Phone') == -1 ){
    // Windows, _not_ Phone
    document.getElementById('pOSTEST').innerHTML = 'Microsoft Windows.';
    render('os_win')
} else if ( platform.os.family.indexOf('OS X') !== -1 ){
    // macOS
    document.getElementById('pOSTEST').innerHTML = 'macOS.';
    render('os_mac')
} else if ( platform.os.family.indexOf('iOS') !== -1 || platform.os.family.indexOf('Android') !== -1 ){
    // iOS or Android
    document.getElementById('pOSTEST').innerHTML = platform.os.family + '.';
    var nope = "<br/><strong>This platform is not currently supported.</strong>";
    document.getElementById('pOSTEST').innerHTML += nope;
    [].forEach.call(document.getElementsByClassName('win'), function(el) {
        el.style.display = 'none';
    });
    [].forEach.call(document.getElementsByClassName('mac'), function(el) {
        el.style.display = 'none';
    });
    [].forEach.call(document.getElementsByClassName('linux'), function(el) {
        el.style.display = 'none';
    });
} else {
    // Everything else (assuming *nix-type)
    document.getElementById('pOSTEST').innerHTML = platform.os.family + '.';
    render('os_linux')
}

function render(os) {
    if (typeof(os) !== 'string')
      os = this.id;
    switch ( os ) {
        case 'os_linux':
            [].forEach.call(document.getElementsByClassName('win'), function(el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.getElementsByClassName('mac'), function(el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.getElementsByClassName('linux'), function(el) {
                el.style.display = 'block';
            });
            break;
        case 'os_win':
            [].forEach.call(document.getElementsByClassName('win'), function(el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.getElementsByClassName('mac'), function(el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.getElementsByClassName('linux'), function(el) {
                el.style.display = 'none';
            });
            break;
        case 'os_mac':
            [].forEach.call(document.getElementsByClassName('win'), function(el) {
                el.style.display = 'none';
            });
            [].forEach.call(document.getElementsByClassName('mac'), function(el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.getElementsByClassName('linux'), function(el) {
                el.style.display = 'none';
            });
            break;
        default:
            [].forEach.call(document.getElementsByClassName('win'), function(el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.getElementsByClassName('mac'), function(el) {
                el.style.display = 'block';
            });
            [].forEach.call(document.getElementsByClassName('linux'), function(el) {
                el.style.display = 'block';
            });
            break;
    }
    return false;
}

document.getElementById('os_all').addEventListener("click", render );
document.getElementById('os_linux').addEventListener("click", render );
document.getElementById('os_win').addEventListener("click", render );
document.getElementById('os_mac').addEventListener("click", render );
