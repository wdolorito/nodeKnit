$(document).ready(function() {
  const menuLength = 21

  const blank = '                        <td><div class="box stitch"></div></td>'

  const stitchMenu = '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box color-item"></div>\n'
                   + '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box menu-item"></div>\n'
                   + '            <div class="box menu-item ch"></div>\n'
                   + '            <div class="box menu-item slst"></div>\n'
                   + '            <div class="box menu-item sc"></div>\n'
                   + '            <div class="box menu-item hdc"></div>\n'
                   + '            <div class="box menu-item hdc dc"><i></i></div>\n'
                   + '            <div class="box menu-item hdc tr"><i></i></div>\n'
                   + '            <div class="box menu-item hdc tr dtr"><i></i><b></b></div>\n'
                   + '            <div class="box menu-item sc2tog"><i></i></div>\n'
                   + '            <div class="box menu-item sc2tog sc3tog"><i></i><b></b></div>\n'
                   + '            <div class="box menu-item sc2tog dc2tog"><i></i><b></b></div>\n'
                   + '            <div class="box menu-item sc2tog dc2tog dc3tog"><i></i><b></b><u></u></div>\n'
                   + '            <div class="box menu-item tdccluster"><i></i><b></b><u></u></div>\n'
                   + '            <div class="box menu-item tdccluster thdccluster"><i></i></div>\n'
                   + '            <div class="box menu-item fdcpop"><i></i><b></b><u></u><del></del><ins></ins></div>\n'
                   + '            <div class="box menu-item fdcshell"><i></i><b></b><u></u><del></del><ins></ins><big></big><small></small></div>\n'
                   + '            <div class="box menu-item ch3picot"><i></i></div>\n'
                   + '            <div class="box menu-item fpdc"><i></i></div>\n'
                   + '            <div class="box menu-item bpdc"><i></i></div>\n'
                   + '            <div class="dropdown-divider"></div>\n'
                   + '            <div class="box menu-item blo"></div>\n'
                   + '            <div class="box menu-item flo"></div>\n'


  const colorMenu = '            <div class="box color red-color"></div>\n'
                  + '            <div class="box color orange-color"></div>\n'
                  + '            <div class="box color yellow-color"></div>\n'
                  + '            <div class="box color green-color"></div>\n'
                  + '            <div class="box color blue-color"></div>\n'
                  + '            <div class="box color indigo-color"></div>\n'
                  + '            <div class="box color black-color"></div>\n'

  var w

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

  $(document).on('click', '.print-pattern', function() {
    var pdf = new jsPDF();

    pdf.fromHTML($('body').get(0))

    console.log(pdf)
    pdf.save()
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
    console.log($(parentParent).attr('class'))
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
