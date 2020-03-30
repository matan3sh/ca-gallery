$(document).ready(onInit());

function onInit() {
    renderPortfolio()
}

function renderPortfolio() {
    var projects = getProjects()
    var strHTML = projects.map(project => generatePortfolio(project))
    $('.portfolio').html(strHTML)
}

function renderModal(projectId) {
    var project = getProjectById(projectId);
    var strHTML = generateModal(project);
    $('.modal-container').html(strHTML);
}

function generatePortfolio(project) {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x flex-align-center"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/thumb_${project.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
        </div>
  </div>
  `
}

function generateModal(project) {
    return `
    <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <h2>${project.name}</h2>
                                <p class="item-intro text-muted">${project.title}</p>
                                <img class="img-fluid d-block mx-auto" src="img/portfolio/thumb_${project.id}.jpg" alt="">
                                <p>${project.desc}</p>
                                <ul class="list-inline">
                                <li>Date: ${project.publishedAt}</li>
                                </ul>
                                
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                    Close Project
                                </button>
                                <a target="_blank" href="${project.url}/${project.id}">
                                <button class="btn btn-primary view-project" type="button">
                                <i class="fa fa-external-link-square"></i>
                                    Enter Project
                                </button>
                                </a>
                                <a target="_blank" href="${project.sourceCode}">
                                <button class="btn btn-primary view-project" type="button">
                                <i class="fa fa-code"></i>
                                    Source Code
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  `
}

function generateContact() {
    const strHTML = `
    <h2 class="contact-header" >Contact Me</h2>
    <br>
    <input type="email" id="fullname" name="fullname" placeholder="Full Name"><br>
    <br>
    <input type="text" id="email" name="email" placeholder="name@example.com"><br>
    <hr>
    <textarea id="msgBody" name="subject" placeholder="Write Your Message" style="height:200px"></textarea><br>
    <button type="button" class="btn btn-primary" onclick="onSubmitMsg($('#fullname').val(),$('#email').val(),$('#msgBody').val())">Submit</button>
    `
    $('#contact').html(strHTML)
}

function onSubmitMsg(fullName, email, message) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${fullName}&b ody=${message}`);
}