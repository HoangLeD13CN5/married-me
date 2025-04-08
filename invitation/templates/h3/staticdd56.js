var canvasWidth = 1400;
var canvasHeight = 1963;
var renderCanvas1 = function() {
	var canvas = document.getElementById('invitation-card');
	var ctx = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var background = new Image();
	background.src = biicore.webroot + '/invitation/templates/'+invitationInfo.templateID+'/bg1.png?v=4';
	background.onload = function(){
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0,0,this.width, this.height);

		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#5f5f5f';
		
		canvas.style.letterSpacing = '15px';
		ctx.font = "40px 'Jura', cursive";
		ctx.fillText('HAPPY WEDDING', canvas.width/2, 280);
		ctx.save();
		
		canvas.style.letterSpacing = '0';
		ctx = canvas.getContext('2d');
		ctx.font = "50px 'Jura', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText('và', canvas.width/2, 1080);
		ctx.save();

		canvas.style.letterSpacing = '0';
		ctx = canvas.getContext('2d');
		ctx.font = "100px 'dancing_scriptregular', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText('Minh Hoàng', canvas.width/2, 980); // 890
		ctx.save();
		
		ctx = canvas.getContext('2d');
		ctx.font = "100px 'dancing_scriptregular', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText('Hải Đoan', canvas.width/2, 1180);
		ctx.save();

		// canvas.style.letterSpacing = '10px';
		// ctx.font = "48px 'Jura', cursive";
		// ctx.fillText('30.10.2025', canvas.width/2, 1355);
		// ctx.save();
		
		
		canvas.style.letterSpacing = '10px';
		ctx.font = "100 60px 'patrick_handregular', cursive";
		ctx.fillText('Wedding Invitation', canvas.width/2, 1700);
		ctx.save();

		canvas.style.letterSpacing = '6px';
		ctx = canvas.getContext('2d');
		ctx.font = "35px 'Jura', cursive";
		ctx.fillText('Save The Date', canvas.width/2, 1770);
		ctx.save();
	};
}
var renderCanvas2 = function() {
	var canvas = document.getElementById('invitation-card-2');
	var ctx = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var background = new Image();
	background.src = biicore.webroot + '/invitation/templates/'+invitationInfo.templateID+'/bg2.png?v=4';
	background.onload = function(){
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0,0,this.width, this.height);

		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillStyle = '#5f5f5f';

		canvas.style.letterSpacing = '0';
		ctx.fillStyle = '#5f5f5f';
		ctx = canvas.getContext('2d');
		ctx.font = "105px 'dancing_scriptregular', cursive";
		ctx.textBaseline = 'middle';
		ctx.textAlign = 'center';
		ctx.fillText('Minh Hoàng' + '  &  ' + 'Hải Đoan', canvas.width/2, 520);
		ctx.save();

		ctx.fillStyle = '#5f5f5f';
		canvas.style.letterSpacing = '2px';
		ctx.font = "45px 'Jura', cursive";
		ctx.fillText('TRÂN TRỌNG KÍNH MỜI', canvas.width/2, 700);
		ctx.save();

		ctx.font = "bold 60px 'comfortaaregular', cursive";
		ctx.fillText(invitationInfo.guest_name, canvas.width/2, 810);
		ctx.save();

		const canvasTxt0 = window.canvasTxt.default;
		canvasTxt0.font = "'Jura', cursive";
		canvasTxt0.fontSize = 45;
		canvasTxt0.fontWeight = '200';
		canvasTxt0.vAlign = 'top';
		canvasTxt0.align = 'center';
		canvasTxt0.lineHeight = 55;
		let canvasTxt0Width = canvas.width-500;
		canvasTxt0.drawText(ctx, 'Đến dự buổi tiệc chung vui cùng gia đình ' + invitationInfo.xungho + ' tại', canvas.width/2 - canvasTxt0Width/2, 880, canvasTxt0Width, 200);
		ctx.save();
		
		// if(invitationInfo.venue_name.trim() !== '') {
		// 	const canvasTxt = window.canvasTxt.default;
		// 	canvasTxt.font = "'comfortaaregular', cursive";
		// 	canvasTxt.fontSize = 40;
		// 	canvasTxt.fontWeight = 'bold';
		// 	canvasTxt.vAlign = 'top';
		// 	canvasTxt.align = 'center';
		// 	canvasTxt.lineHeight = 60;
		// 	canvasTxt.drawText(ctx, invitationInfo.venue_name.trim(), canvas.width/2 - canvasTxt0Width/2, 1090, canvasTxt0Width, 200);
		// 	ctx.save();
			
		// 	const canvasTxt01 = window.canvasTxt.default;
		// 	canvasTxt01.font = "'Jura', cursive";
		// 	canvasTxt01.fontSize = 40;
		// 	canvasTxt01.fontWeight = '200';
		// 	canvasTxt01.vAlign = 'top';
		// 	canvasTxt01.align = 'center';
		// 	canvasTxt01.lineHeight = 55;
		// 	canvasTxt.drawText(ctx, invitationInfo.event_address, canvas.width/2 - canvasTxt0Width/2, 1140, canvasTxt0Width, 200);
		// 	ctx.save();
		// }else{
		// 	const canvasTxt = window.canvasTxt.default;
		// 	canvasTxt.font = "'comfortaaregular', cursive";
		// 	canvasTxt.fontSize = 40;
		// 	canvasTxt0.fontWeight = 'bold';
		// 	canvasTxt.vAlign = 'top';
		// 	canvasTxt.align = 'center';
		// 	canvasTxt.lineHeight = 60;
		// 	canvasTxt.drawText(ctx, 'NO 51 - LK 16 - Dọc Bún 2 - La Khê - Hà Đông - Hà Nội', canvas.width/2 - canvasTxt0Width/2, 1090, canvasTxt0Width, 200);
		// 	ctx.save();
		// }

		const canvasTxt = window.canvasTxt.default;
		canvasTxt.font = "'comfortaaregular', cursive";
		canvasTxt.fontSize = 40;
		canvasTxt0.fontWeight = 'bold';
		canvasTxt.vAlign = 'top';
		canvasTxt.align = 'center';
		canvasTxt.lineHeight = 60;
		canvasTxt.drawText(ctx, 'NO 51 - LK 16 - Dọc Bún 2 - La Khê - Hà Đông - Hà Nội', canvas.width/2 - canvasTxt0Width/2, 1090, canvasTxt0Width, 200);
		ctx.save();
		
		ctx.fillStyle = '#5f5f5f';
		ctx.font = "bold 45px 'comfortaaregular', cursive";
		ctx.fillText(('Vào lúc ' + invitationInfo.time).toUpperCase(), canvas.width/2, 1400);
		ctx.save();

		ctx.font = "bold 45px 'comfortaaregular', cursive";
		ctx.fillText(invitationInfo.date.toUpperCase(), canvas.width/2, 1480);
		ctx.save();
		
		ctx.fillStyle = '#5f5f5f';
		const canvasTxt1 = window.canvasTxt.default;
		canvasTxt1.font = "'dancing_scriptregular', cursive";
		canvasTxt1.fontSize = 50;
		canvasTxt1.fontWeight = '200';
		canvasTxt1.vAlign = 'top';
		canvasTxt1.align = 'center';
		canvasTxt1.lineHeight = 60;
		canvasTxt0Width = canvas.width-600;
		canvasTxt1.drawText(ctx, 'Sự hiện diện của '+ invitationInfo.vaive + ' là niềm vinh hạnh cho gia đình ' + invitationInfo.xungho + '!', canvas.width/2 - canvasTxt0Width/2 + 20, 1550, canvasTxt0Width, 200);
		ctx.save();
	};
}

var renderCanvas = function() {
	renderCanvas1();
	renderCanvas2();
}
window.addEventListener('load', function(){
	WebFont.load({
		custom: {
			families: ['dancing_scriptregular', 'comfortaaregular', 'patrick_handregular']
		},
		google: {families: ['Jura', 'Great Vibes', 'Tourney:100']},
		active: function(){
			renderCanvas();
			let renderCount = 0;
			const intID = setInterval(function(){
				renderCanvas();
				if(renderCount >= 3) clearInterval(intID);
				renderCount++;
			},100);
		}
	});
});