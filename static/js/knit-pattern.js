$(document).ready(function() {
  const menuLength = 36

  const blank = '                        <td><div class="box stitch"></div></td>'

  const stitchMenu = '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box color-item"></div>\n'
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

  const colorMenu = '            <div class="box color red-color"></div>\n'
                 + '            <div class="box color orange-color"></div>\n'
                 + '            <div class="box color yellow-color"></div>\n'
                 + '            <div class="box color green-color"></div>\n'
                 + '            <div class="box color blue-color"></div>\n'
                 + '            <div class="box color indigo-color"></div>\n'
                 + '            <div class="box color black-color"></div>\n'

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

  $('.print-pattern').on('click', function() {
    console.log('opening print page')
    $.post('/print', function(data) {
      console.log('received: ' + data)
      var w = window.open()
      w.document.open()
      w.document.write(data)
      w.document.close()
    })
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

  $(document).on('click', '.box', function() {
    if($(this).hasClass('color-item')) { return }
    if($(this).hasClass('menu-item')) { return }
    var parent = this.parentNode
    var parentLength = $(parent).find('.menu-item').length
    if(parentLength > 0) {
      $(parent).children().first().addClass('stitch')
      $(parent).children().slice(1).remove()

      if($(parent.parentNode).hasClass('align-top') && (parentLength == menuLength)) {
         $(parent.parentNode).removeClass('align-top')
      }
    }
    console.log('++++++')
    console.log(parent)
    console.log(parentLength > 0)
    console.log('++++++')
  })

  $(document).on('click', '.stitch', function() {
    var parent = this.parentNode
    var parentParent = this.parentNode.parentNode
    console.log($(this).attr('class'))
    if($(this).hasClass('stitch')) { $(this).removeClass('stitch') }
    var lastClass = $(this).attr('class').split(' ').pop()
    $(parent).append(stitchMenu)
    if(lastClass.endsWith('-color')) {
      console.log('this has a color')
      $(parent).children().not('.color-item').addClass(lastClass)
    }
    console.log($(this).attr('class'))
    console.log(parent)
    console.log(parentParent)
    $(parentParent).addClass('align-top')
    console.log($(this).attr('class'))
  })

  $(document).on('click', '.menu-item', function() {
    if($(this).hasClass('color')) { return }
    var parent = this.parentNode
    var parentParent = parent.parentNode
    var parentParentLength = $(parentParent).find('.menu-item').length
    console.log($(this).attr('class'))
    if($(this).hasClass('menu-item')) { $(this).removeClass('menu-item') }
    $(this).addClass('stitch')
    $(parent).empty()
    $(parent).append($(this))
    console.log(parentParentLength)
    if($(parentParent).hasClass('align-top') && (parentParentLength == menuLength)) {
       $(parentParent).removeClass('align-top')
    }
  })

  $(document).on('click', '.color-item', function() {
    length = $(this).children().length
    console.log(length)
    if(length == 7) {
      $(this).empty()
      return
    }
    $(this).append(colorMenu)
    console.log($(this))
  })

  $(document).on('click', '.color', function() {
    var parent = this.parentNode
    var parentParent = parent.parentNode
    var parentParentLength = $(parentParent.parentNode).find('.menu-item').length
    var color = $(this).attr('class').split(' ')[2]
    if(color == 'black-color') {
      color = ''
      console.log('it\'s black')
    }
    console.log('===')
    console.log(color)
    console.log(parentParent)
    $(parentParent).children().first().removeClass('red-color orange-color yellow-color green-color blue-color indigo-color black-color')
    $(parentParent).children().first().addClass(color)
    $(parentParent).children().first().addClass('stitch')
    $(parentParent).children().slice(1).remove()
    console.log(parentParentLength)
    if($(parentParent.parentNode).hasClass('align-top') && (parentParentLength == menuLength)) {
       $(parentParent.parentNode).removeClass('align-top')
    }
  })
})
