const rootElement = document.documentElement;

export const programacao= {
    destaque: getComputedStyle(rootElement).getPropertyValue('--cards-destaque-programacao').trim(),
    fundo:getComputedStyle(rootElement).getPropertyValue('--cards-fundos-programacao').trim()
};

export const dataScience = {
    destaque: getComputedStyle(rootElement).getPropertyValue('--cards-destaque-data-science').trim(),
    fundo: getComputedStyle(rootElement).getPropertyValue('--cards-fundos-data-science').trim()
};

export const frontEnd = {
    destaque:getComputedStyle(rootElement).getPropertyValue('--cards-destaque-front-end').trim(),
    fundo: getComputedStyle(rootElement).getPropertyValue('--cards-fundos-front-end').trim()
};

export const devops = {
    destaque:getComputedStyle(rootElement).getPropertyValue('--cards-destaque-devops').trim(),
    fundo:getComputedStyle(rootElement).getPropertyValue('--cards-fundos-devops').trim()
};

export const uxDesign = {
    destaque:getComputedStyle(rootElement).getPropertyValue('--cards-destaque-ux-design').trim(),
    fundo:getComputedStyle(rootElement).getPropertyValue('--cards-fundos-ux-design').trim()
};

export const mobile = {
    destaque:getComputedStyle(rootElement).getPropertyValue('--cards-destaque-mobile').trim(),
    fundo:getComputedStyle(rootElement).getPropertyValue('--cards-fundos-mobile').trim()
};

export const inovacaoGestao = {
    destaque:getComputedStyle(rootElement).getPropertyValue('--cards-destaque-inovacao-gestao').trim(),
    fundo:getComputedStyle(rootElement).getPropertyValue('--cards-fundos-inovacao-gestao').trim()
}