class Solution(object):
    def gridBasedAdjacencyMatrix(self, grid):
        adjacency_matrix = []
        rows = len(grid)
        columns = len(grid[0])
        
        all_numbers = []
        for i in range(rows):
            for j in range(columns):
                all_numbers.append(grid[i][j])
                
        unique_numbers = sorted(list(set(all_numbers)))
        n = len(unique_numbers)
        
        result_matrix = [[0] * n for _ in range(n)]
        
        for row in range(rows):
            for column in range(columns - 1):
                adjacency_matrix.append([grid[row][column], grid[row][column + 1]])

        for row in range(rows - 1):
            for column in range(columns):
                adjacency_matrix.append([grid[row][column], grid[row + 1][column]])
        
        for edge in adjacency_matrix:
            i = unique_numbers.index(edge[0])
            j = unique_numbers.index(edge[1])
            result_matrix[i][j] = 1
            result_matrix[j][i] = 1
        
        return result_matrix