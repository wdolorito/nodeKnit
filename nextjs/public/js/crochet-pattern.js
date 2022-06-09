$(document).ready(function() {
  const menuLength = 21

  const blank = '<td><div class="box stitch"></div></td>'

  const stitchMenu = '<div class="dropdown-divider"></div>\n'
                   + '<div class="box color-item"></div>\n'
                   + '<div class="dropdown-divider"></div>\n'
                   + '<div class="box menu-item"></div>\n'
                   + '<div class="box menu-item ch"></div>\n'
                   + '<div class="box menu-item slst"></div>\n'
                   + '<div class="box menu-item sc"></div>\n'
                   + '<div class="box menu-item hdc"></div>\n'
                   + '<div class="box menu-item hdc dc"><i></i></div>\n'
                   + '<div class="box menu-item hdc tr"><i></i></div>\n'
                   + '<div class="box menu-item hdc tr dtr"><i></i><b></b></div>\n'
                   + '<div class="box menu-item sc2tog"><i></i></div>\n'
                   + '<div class="box menu-item sc2tog sc3tog"><i></i><b></b></div>\n'
                   + '<div class="box menu-item sc2tog dc2tog"><i></i><b></b></div>\n'
                   + '<div class="box menu-item sc2tog dc2tog dc3tog"><i></i><b></b><u></u></div>\n'
                   + '<div class="box menu-item tdccluster"><i></i><b></b><u></u></div>\n'
                   + '<div class="box menu-item tdccluster thdccluster"><i></i></div>\n'
                   + '<div class="box menu-item fdcpop"><i></i><b></b><u></u><del></del><ins></ins></div>\n'
                   + '<div class="box menu-item fdcshell"><i></i><b></b><u></u><del></del><ins></ins><big></big><small></small></div>\n'
                   + '<div class="box menu-item ch3picot"><i></i></div>\n'
                   + '<div class="box menu-item fpdc"><i></i></div>\n'
                   + '<div class="box menu-item bpdc"><i></i></div>\n'
                   + '<div class="dropdown-divider"></div>\n'
                   + '<div class="box menu-item blo"></div>\n'
                   + '<div class="box menu-item flo"></div>\n'


  const colorMenu = '<div class="box color red-color"></div>\n'
                  + '<div class="box color orange-color"></div>\n'
                  + '<div class="box color yellow-color"></div>\n'
                  + '<div class="box color green-color"></div>\n'
                  + '<div class="box color blue-color"></div>\n'
                  + '<div class="box color indigo-color"></div>\n'
                  + '<div class="box color black-color"></div>\n'

  function returnBlankRow(num) {
    let blankRow = '<div class="row">\n'
                 + '<div class="col">\n'
                 + '<div class="container">\n'
                 + '<table class="pattern-table">\n'
                 + '<tbody><tr><th>\n'
                 + '<div class="row-info">Row ' + num + '</div>\n'
                 + '<input class="row-spinner row-info form-control" type="number" min="0" value="20" oldValue="20" onkeydown="return false"></th>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '<td><div class="box stitch"></div></td>\n'
                 + '</tr></tbody></table></div></div></div>\n'

    return blankRow
  }

  $('.add-row').on('click', function() {
      let pat = $('.pattern-area')
      let newLen = $(pat).children().length + 1
      let newRow = returnBlankRow(newLen)
      $(pat).append(newRow)
  })

  $('.rem-row').on('click', function() {
    let pat = $('.pattern-area')
    $(pat).children().last().remove()
  })

  $(document).on('focusin', '.row-spinner', function() {
    $(this).attr('oldValue', this.value)
  })

  $(document).on('input', '.row-spinner', function() {
    let parent = this.parentNode.parentNode
    let prev = $(this).attr('oldValue')
    let curr = this.value
    let dir = curr - prev

    if(dir >= -1) {
      switch(dir) {
        case 0:
        case 1:
          $(parent).append(blank)
          break
        default:
          $(parent).children('td').last().remove()
          break
      }
      $(this).trigger('focusin')
    }
  })

  $(document).on('click', '.box', function() {
    if($(this).hasClass('color-item')) { return }
    if($(this).hasClass('menu-item')) { return }
    let parent = this.parentNode
    let parentLength = $(parent).find('.menu-item').length
    if(parentLength > 0) {
      $(parent).children().first().addClass('stitch')
      $(parent).children().slice(1).remove()

      if($(parent.parentNode).hasClass('align-top') && (parentLength == menuLength)) {
         $(parent.parentNode).removeClass('align-top')
      }
    }
  })

  $(document).on('click', '.stitch', function() {
    let parent = this.parentNode
    let parentParent = this.parentNode.parentNode
    if($(this).hasClass('stitch')) { $(this).removeClass('stitch') }
    let lastClass = $(this).attr('class').split(' ').pop()
    $(parent).append(stitchMenu)
    if(lastClass.endsWith('-color')) {
      $(parent).children().not('.color-item').addClass(lastClass)
    }
    $(parentParent).addClass('align-top')
  })

  $(document).on('click', '.menu-item', function() {
    if($(this).hasClass('color')) { return }
    let parent = this.parentNode
    let parentParent = parent.parentNode
    let parentParentLength = $(parentParent).find('.menu-item').length
    if($(this).hasClass('menu-item')) { $(this).removeClass('menu-item') }
    $(this).addClass('stitch')
    $(parent).empty()
    $(parent).append($(this))
    if($(parentParent).hasClass('align-top') && (parentParentLength == menuLength)) {
       $(parentParent).removeClass('align-top')
    }
  })

  $(document).on('click', '.color-item', function() {
    length = $(this).children().length
    if(length == 7) {
      $(this).empty()
      return
    }
    $(this).append(colorMenu)
  })

  $(document).on('click', '.color', function() {
    let parent = this.parentNode
    let parentParent = parent.parentNode
    let parentParentLength = $(parentParent.parentNode).find('.menu-item').length
    let color = $(this).attr('class').split(' ')[2]
    if(color == 'black-color') {
      color = ''
    }
    $(parentParent).children().first().removeClass('red-color orange-color yellow-color green-color blue-color indigo-color black-color')
    $(parentParent).children().first().addClass(color)
    $(parentParent).children().first().addClass('stitch')
    $(parentParent).children().slice(1).remove()
    if($(parentParent.parentNode).hasClass('align-top') && (parentParentLength == menuLength)) {
       $(parentParent.parentNode).removeClass('align-top')
    }
  })
})
