$(document).ready(function() {
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

    if(dir >= -1) {
      var blank = '                        <td><div class="box knit"></div></td>'
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
