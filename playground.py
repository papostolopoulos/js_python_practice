import math

def countingTiles(r):
    # Make a square box covering a quarter of the circle
    tile_size = 1
    tile_length_1d = int(math.ceil(r / tile_size))
    print("tile_length_1d", tile_length_1d)
    # How many tiles do you need?
    num_complete_tiles = 0
    num_partial_tiles = 0
    for i in range(tile_length_1d):
        for j in range(tile_length_1d):
            # Does corner of tile intersect circle?
            intersect_len = ((i * tile_size)**2 + (j * tile_size)**2)**0.5
            # Does *far* corner intersect (ie. is the whole tile in the circle)
            far_intersect_len = (((i+1) * tile_size)**2 + ((j+1) * tile_size)**2)**0.5
            print(intersect_len, far_intersect_len)
            print("intersect_len > r:", intersect_len > r)
            print("far_intersect_len < r:", far_intersect_len < r)
            if intersect_len > r:
                # Don't need tile, continue
                continue
            elif far_intersect_len > r:
                # Partial tile
                num_partial_tiles += 1
            else:
                # Keep tile. Maybe you want to store this or something
                # instead of just adding 1 to count?
                num_complete_tiles += 1
            # Multiple by 4 for symmetry
    return [num_complete_tiles * 4, num_partial_tiles * 4]

countingTiles(2)
