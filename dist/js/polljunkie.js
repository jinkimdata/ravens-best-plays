(function () {
    var self = this;

    var PollJunkie = self.PollJunkie = { debug: false };
    var $ = self.jQuery;

    function showIFrame(options) {
        var url = options.urlBase + '/poll/' + options.code + '/' + options.s + '/embed';
        url += '?w=' + options.width.toString();
        url += '&ref=' + escape(document.location.href);


        var html = '';

        url += '&barBgColor=' + escape(options.barBgColor);
        url += '&fontColor=' + escape(options.fontColor);

        var iframe = '<iframe class="pollFrame" src="' + url + '" ' + ' ' + ' frameBorder="0" scrolling="no" allowTransparency></iframe>';



        html += '<div class="poll">';
        html += iframe;
        html += '</div>';


        document.write(html);
    }

    PollJunkie.show = function (options) {
        var urlBase = "http://www.polljunkie.com";

        options.height = parseInt(options.height, 10);
        options.width = parseInt(options.width, 10);


        if (options.height < 0) {
            options.height = 300;
        }

        if (options.width < 0) {
            options.width = 300;
        }

        options["urlBase"] = urlBase;


        showIFrame(options);
    }


}).call(this);