export default function() {
  this.transition(
    this.hasClass('station-list'),
    this.toValue(true),
    this.use('toDown', {
      easing: [250, 30]
    }),
    this.reverse('toUp')
  );

  this.transition(
    this.hasClass('picker'),
    this.toValue(true),
    this.use('fade', {
      duration: 500
    })
  );

  this.transition(
    this.hasClass('result-list'),
    this.toValue(true),
    this.use('fade', {
      duration: 500
    })
  );
}
