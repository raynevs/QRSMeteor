Template.presentationLayout.onDestroyed(function() {
    var landingPageAlreadySeen = Session.get('landingPageAlreadySeen');
    // console.log('user left the slide generator, make sure he gets the landing page next time');
    // console.log('ppt_integrationMain onDestroyed. landingPageAlreadySeen:', landingPageAlreadySeen);
    Session.set('landingPageAlreadySeen', false);
});

Template.presentationLayout.helpers({
    showPresentation() {
        // console.log('show the IFRAME');
        return Session.get('showPresentation'); //&& Session.get('clickedInSelection');
    }
})


Template.presentationLayout.events({
    'click .launch': function(event) {
        console.log('button launch nav clicked');
        $('.ui.sidebar')
            .sidebar('toggle');
    },
    'click .button createSlides': function(event) {
        console.log('button createSlides clicked');
        Session.set('showPresentation', true);
    }
})
