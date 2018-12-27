---
layout: blogpost
title:  "How to Bypass AdBlock Blockers"
date: 2017-05-13 20:58:00 -0500
displayintro: Learn how to access webpages that don't allow the use of ad blockers
---
<h2>Introduction</h2>
<p>Whether it's Adblock Plus, uBlock Origin, or some other content blocker, having an ad blocker on is always a good idea. It increases the security on your computer by blocking potentially malicious ads and other undesirable content, and makes websites look and feel cleaner all while making them load faster, among other things. However, some websites don't like when you block their ads, and in return, they don't allow you to see their content. But what if you want to read those articles without compromising your security or convenience? This tutorial is here to help. I'll update it if I come across new methods to get around the problem.</p>
<p>If any method works for you, you don't really need to read the rest.</p>

<h2>Things You'll Need</h2>
<ul>
<li>Your computer (some of these may work on mobile devices though)</li>
</ul>

<h2>Guide</h2>
<div class="tutorialguide">
<h3>Temporarily disable Javascript</h3>
<p>Some websites detect adblockers by running some javascript, so disabling it may fix your issue.</p>
<p>Each browser is different, but in my main browser, Safari, it is done by first enabling the Devloper menu. This is done by going to Safari Preferences (Safari menu bar button, then preferences), then to Advanced, then ticking the checkbox that says "Show Develop menu in menu bar". Close that window, then in the menu bar, open the Develop menu, and click on Disable Javascript. When you're done with the website, re-enable Javascript by going back to the Develop menu, and clicking Disable Javascript again.</p>
<p>You can follow <a href="http://www.wikihow.com/Disable-JavaScript">this WikiHow article</a> to learn how to disable javascript in some other browsers.</p>
<h3>Temporarily disable CSS (works on Forbes.com)</h3>
<p>On Forbes.com and probably other websites, all you have to do is disable CSS and click the right link.</p>
<p>Each browser is different, but in my main browser, Safari, it is done by first enabling the Devloper menu. This is done by going to Safari Preferences (Safari menu bar button, then preferences), then to Advanced, then ticking the checkbox that says "Show Develop menu in menu bar". Close that window, then in the menu bar, open the Develop menu, and click on Disable Styles. Next, (on Forbes), wait for the "disable AdBlock" popup to appear, and click "continue to site". Then you can re-enable CSS by going back to the Develop menu, and clicking Disable Styles again.</p>
<h3>Use inspect element to remove the "disable AdBlock" overlay</h3> 
<p>Sometimes, all you have to do is delete the offending part of the website. Right click on the page, and click "Inspect Element". Every modern browser should have a similar function. Inspect Element will come up, and you have to select the "Select" tool. It usually looks like a crosshair or a mouse by a window. Hover over the overlay, and it should light up. Click it. Inside Inspect Element, some HTML should now be highlighted. Click the delete key on your keyboard. If it doesn't work, try deleting other things that may be part of the overlay. Make sure you don't delete the main content!</p>
<h3>Use AdBlock Plus' Block Element feature</h3> 
<p>I'm not sure if other blockers have this, but AdBlock Plus has a Block Element feature that acts similarly to the Inspect Element method I just talked about. Click the "Block Element" button in the AdBlock Plus menu and then click on the overlay. A new tab should open up asking if you want to block that element. Say yes. You can undo it later by going to the "Options" section under the AdBlock Plus menu, then to "Add your own filters", and from there, removing the blocked elements from the list.</p>
</div>

<h2>Conclusion</h2>
<p>Hopefully my methods worked for you! I'll update the guide if I discover a new way to get around the AdBlock blockers. If you like these tutorials or you want to hear more from me, please follow me on Twitter <a href="https://www.twitter.com/JustinAlexP" target="_blank">@JustinAlexP</a>.</p>
