'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 15;
var BARWIDTH = CLOUD_HEIGHT - GAP - FONT_GAP - TEXT_HEIGHT - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.font = "16px PT Mono";

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + BAR_WIDTH + ((COLUMN_GAP + BAR_WIDTH) * [i]), CLOUD_Y + CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%,' + Math.random() * 100 + '%)';
    }
    ctx.fillRect(
      CLOUD_X + BAR_WIDTH + GAP + ((COLUMN_GAP + BAR_WIDTH) * [i]),
      CLOUD_Y + CLOUD_HEIGHT - GAP - GAP - 15,
      BAR_WIDTH,
      -(BARWIDTH * times[i]) / maxTime);
  }
};
