$(document).ready(function() {
  const blank = '                        <td><div class="box stitch"></div></td>'

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
      var pat = $('#pattern-area')
      var newLen = $(pat).children().length + 1
      var newRow = returnBlankRow(newLen)
      $(pat).append(newRow)
      console.log('added row')
      console.log(newLen)
  })

  $('.rem-row').on('click', function() {
    var pat = $('#pattern-area')
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
})
