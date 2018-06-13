$(document).ready(function() {
  const blank = '                        <td><div class="box knit"></div></td>'
  const blankRow = '  <div class="row">\n'
                 + '    <div class="col">\n'
                 + '      <div class="pattern-area">\n'
                 + '          <table class="pattern-table">\n'
                 + '            <tbody>\n'
                 + '              <tr>\n'
                 + '                <th>\n'
                 + '                  <div class="row-info">Row</div>\n'
                 + '                  <input id="blank-spinner" class="row-info form-control" type="number" min="0" value="10">\n'
                 + '                </th>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '                <td><div class="box knit"></div></td>\n'
                 + '              </tr>\n'
                 + '            </tbody>\n'
                 + '          </table>\n'
                 + '        </div>\n'
                 + '      </div>\n'
                 + '    </div>\n'

  $('#add-row').on('click', function(){
      var pat = $('#pattern-area')
      console.log('added row')
      $(pat).append(blankRow)
  })

  $('#rem-row').on('click', function(){
    var pat = $('#pattern-area')
    $(pat).children().last().remove()
    console.log('removed row')
  })

  $('#row-1-spinner').on('focusin', function(){
        $(this).attr('oldValue', this.value);
  })

  $('#row-1-spinner').bind('input', function(){
    var parent = this.parentNode.parentNode
    var prev = $(this).attr('oldValue')
    var curr = this.value
    var dir = curr - prev

    console.log(prev)
    console.log(curr)
    console.log(blankRow)

    if(dir >= -1) {
      switch(dir) {
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
    } else {
      console.log("you tried to go negative")
    }
  })
})
