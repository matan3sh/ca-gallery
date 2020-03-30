var gProjects = [
    {
        id: 'minesweeper', name: 'Mine Sweeper', title: 'Board Game Web App',
        desc: 'CodingAcademy first Sprint Challenge, using: html, css and vanilla javascript', url: 'projects/', sourceCode: 'https://github.com/matan3sh/mine-sweeper', publishedAt: getFormattedDate(), labels: ['Matrixes', 'keyboard events', 'Javascript', 'ES5']
    },
    {
        id: 'touchnums', name: 'Touch Nums', title: 'Board Game Web App',
        desc: 'CodingAcademy first Board-Game Challenge, using: html, css and vanilla javascript', url: 'projects/', sourceCode: 'https://github.com/matan3sh/touch-nums', publishedAt: getFormattedDate(), labels: ['Matrixes', 'keyboard events', 'Javascript', 'ES5']
    },
    {
        id: 'bookshop', name: 'Book Shop', title: 'Web App', desc: 'CodingAcademy home exercise using MVC design pattern and (Create Read Update Delete) functionality plus Pagination feature. Develop with: html, css and vanilla javascript (ES5) and save data in LocalStorage',
        url: 'projects/', sourceCode: 'https://github.com/matan3sh/touch-nums', publishedAt: getFormattedDate(), labels: ['Vanilla Javascript', 'ES5', 'CRUD', 'MVC']
    },
    {
        id: 'guesswho', name: 'Guess Who', title: 'Web App', desc: 'CodingAcademy home exercise using Binary Tree Data Structure. Develop with: html, css, javascript (ES6) and jquery. Save data in LocalStorage', url: 'projects/', sourceCode: 'https://github.com/matan3sh/guess-who', publishedAt: getFormattedDate(), labels: ['Vanilla Javascript', 'ES6', 'jQuery', 'Bootstrap']
    }
]

function getProjects() {
    return gProjects
}

function getProjectById(projectId) {
    return gProjects.find(project => project.id === projectId)
}