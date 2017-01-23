angular.module('ghop-ui')
.factory('Bands', $resource => $resource('/ghop-core/bands?genome=:genome&contig=:contig&coord=:coord&left=:left&right=:right&dataSources=:dataSources', {
    genome: '@genome',
    contig: '@contig',
    coord: '@coord',
    left: '@left',
    right: '@right',
    dataSources: '@dataSources'
}));