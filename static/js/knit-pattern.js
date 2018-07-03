$(document).ready(function() {
  const blank = '                        <td><div class="box stitch"></div></td>'

  const stitchMenu = '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box menu-item color"></div>\n'
                   + '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box menu-item"></div>\n'
                   + '            <div class="box menu-item purl"></div>\n'
                   + '            <div class="box menu-item yo"></div>\n'
                   + '            <div class="box menu-item k2tog"></div>\n'
                   + '            <div class="box menu-item p2tog"></div>\n'
                   + '            <div class="box menu-item ssk"></div>\n'
                   + '            <div class="box menu-item ssp"></div>\n'
                   + '            <div class="box menu-item k1fb"></div>\n'
                   + '            <div class="box menu-item mkk"></div>\n'
                   + '            <div class="box menu-item mpp"></div>\n'
                   + '            <div class="box menu-item rsm"></div>\n'
                   + '            <div class="box menu-item lsm"></div>\n'
                   + '            <div class="box menu-item rsli"></div>\n'
                   + '            <div class="box menu-item lsli"></div>\n'
                   + '            <div class="box menu-item slpwyb"></div>\n'
                   + '            <div class="box menu-item slpwyf"><i></i></div>\n'
                   + '            <div class="box menu-item k3tog"><i></i></div>\n'
                   + '            <div class="box menu-item p3tog"><i></i></div>\n'
                   + '            <div class="box menu-item sk2p"><i></i></div>\n'
                   + '            <div class="box menu-item sssp"><i></i></div>\n'
                   + '            <div class="box menu-item s2kp2"></div>\n'
                   + '            <div class="box menu-item k1tbl"></div>\n'
                   + '            <div class="box menu-item p1tbl"><i></i></div>\n'
                   + '            <div class="box menu-item bobble"></div>\n'
                   + '            <div class="box menu-item nost"></div>\n'
                   + '            <div class="box menu-item inc1to3"></div>\n'
                   + '            <div class="box menu-item inc1to4"></div>\n'
                   + '            <div class="box menu-item inc1to5"></div>\n'
                   + '            <div class="box menu-item dec4to1rs"></div>\n'
                   + '            <div class="box menu-item dec4to1ls"></div>\n'
                   + '            <div class="box menu-item dec4to1cen"></div>\n'
                   + '            <div class="box menu-item dec5to1"></div>\n'
                   + '            <div class="box menu-item k1yo2"></div>\n'
                   + '            <div class="box menu-item bindo"></div>\n'
                   + '            <div class="box menu-item strn"></div>\n'
                   + '            <div class="box menu-item caston"></div>\n'

  function returnBlankRow(num) {
    var blankRow = '  <div class="row">\n'
                 + '    <div class="col">\n'
                 + '      <div class="container">\n'
                 + '          <table class="pattern-table">\n'
                 + '            <tbody>\n'
                 + '              <tr>\n'
                 + '                <th>\n'
                 + '                  <div class="row-info">Row ' + num + '</div>\n'
                 + '                  <input class="row-spinner row-info form-control" type="number" min="0" value="20" oldValue="20" onkeydown="return false">\n'
                 + '                </th>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '                <td><div class="box stitch"></div></td>\n'
                 + '              </tr>\n'
                 + '            </tbody>\n'
                 + '          </table>\n'
                 + '        </div>\n'
                 + '      </div>\n'
                 + '    </div>\n'

    return blankRow
  }

  $('.add-row').on('click', function() {
      var pat = $('.pattern-area')
      var newLen = $(pat).children().length + 1
      var newRow = returnBlankRow(newLen)
      $(pat).append(newRow)
      console.log('added row')
      console.log(newLen)
  })

  $('.rem-row').on('click', function() {
    var pat = $('.pattern-area')
    $(pat).children().last().remove()
    console.log('removed row')
  })

  $(document).on('focusin', '.row-spinner', function() {
    console.log(this.value)
    $(this).attr('oldValue', this.value)
    console.log($(this).attr('oldValue'))
  })

  $(document).on('input', '.row-spinner', function() {
    var parent = this.parentNode.parentNode
    var prev = $(this).attr('oldValue')
    var curr = this.value
    var dir = curr - prev

    console.log('Previous: ' + prev)
    console.log('Current: ' + curr)

    if(dir >= -1) {
      switch(dir) {
        case 0:
        case 1:
          console.log('added')
          $(parent).append(blank)
          break
        default:
          console.log('removed')
          $(parent).children('td').last().remove()
          break
      }
      $(this).trigger('focusin')
    }
  })

  $(document).on('click', '.stitch', function() {
    var parent = this.parentNode
    var parentParent = parent.parentNode
    console.log($(this).attr('class'))
    if($(this).hasClass('stitch')) { $(this).removeClass('stitch') }
    console.log($(this).attr('class'))
    console.log(parent)
    console.log(parentParent)
    $(parent).append(stitchMenu)
    $(parentParent).addClass('align-top')
    console.log($(this).attr('class'))
  })

  $(document).on('click', '.menu-item', function() {
    var parent = this.parentNode
    var parentParent = parent.parentNode
    var parentParentLength = $(parentParent).find('.menu-item').length
    console.log($(this).attr('class'))
    if($(this).hasClass('menu-item')) { $(this).removeClass('menu-item') }
    $(this).addClass('stitch')
    $(parent).empty()
    $(parent).append($(this))
    console.log(parentParentLength)
    if($(parentParent).hasClass('align-top') && (parentParentLength == 37)) {
       $(parentParent).removeClass('align-top')
    }
  })
})
